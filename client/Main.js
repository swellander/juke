import React from 'react'
import Sidebar from './Sidebar';
import AlbumContainer from './AlbumContainer';
import Player from './Player';
import axios from 'axios';
import SingleAlbum from './SingleAlbum';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: null,
      currentAudio: {} 
    }
    this.pause = this.pause.bind(this);
    this.play= this.play.bind(this);
    this.backToAlbums = this.backToAlbums.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
  }

  componentDidMount() {
    axios.get('api/albums')
      .then( response => {
        this.setState({ albums: response.data })
      });
  }
  // Refactor playSong() into play() and pause

  pause() {
    const { currentAudio } = this.state; 
    //if there is a song currently playing, pause it 
    if (currentAudio.pause) currentAudio.pause();
    this.forceUpdate();
  }

  play(audioUrl, songId) {
    const { currentAudio, currentSong } = this.state;

    //if selected song is paused
    if (currentAudio.paused && songId === currentSong) {
      currentAudio.play(); 
      this.forceUpdate();
      return;
    }    

    //TODO: maybe refactor this into a simple else? Gotta think that through
    //if different song is playing, pause it and start the new one
    if (songId !== currentSong && currentAudio.pause) {
      this.pause(); 
    }

    const audio = document.createElement('audio');
    audio.src = audioUrl; 
    audio.load();
    audio.play();
    this.setState({
      currentSong: songId, 
      currentAudio: audio
    });
  }

  backToAlbums() {
    this.setState({ selectedAlbum: {} });
  }

  selectAlbum (albumId) {
    axios.get('api/albums/' + albumId)
      .then( response => {
        this.setState({ selectedAlbum: response.data })
      });
  }

  render () {
    let currentView = this.state.selectedAlbum.id ? 
      <SingleAlbum 
        currentSong={ this.state.currentSong } 
        controls={
          { play: this.play, pause: this.pause }
        }
        isPaused={ this.state.currentAudio.paused }
        album={ this.state.selectedAlbum }/> 
      : <AlbumContainer 
        selectAlbum={ this.selectAlbum } 
        albums={ this.state.albums } />;

    return (
      <div id='main' className='row container'>
        <Sidebar backToAlbums={this.backToAlbums} />
        { currentView }
        { this.state.currentSong ? <Player /> : ''} 
      </div>
    )
  }
}
