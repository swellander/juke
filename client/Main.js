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
    this.playSong = this.playSong.bind(this);
    this.backToAlbums = this.backToAlbums.bind(this);
    this.selectAlbum = this.selectAlbum.bind(this);
  }

  componentDidMount() {
    axios.get('api/albums')
      .then( response => {
        this.setState({ albums: response.data })
      });
  }

  playSong(audioUrl, songId) {
    const { currentAudio, currentSong } = this.state;
    //if selected song is paused
    if (currentAudio.paused && songId === currentSong) {
      currentAudio.play(); 
      return;
    }    
    //if selected song is playing (i.e. pause btn clicked) just pause song
    if (songId === currentSong && currentAudio.paused === false) {
      currentAudio.pause();
      return;
    }

    //if different song is playing, pause it and start the new one
    if (songId !== currentSong && currentAudio.pause) currentAudio.pause();

    const audio = document.createElement('audio');
    audio.src = audioUrl; 
    audio.load();
    audio.play();
    console.dir(audio);
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
    let currentView = this.state.selectedAlbum.id ? <SingleAlbum currentSong={this.state.currentSong} playSong={this.playSong} album={this.state.selectedAlbum}/> : <AlbumContainer selectAlbum={ this.selectAlbum } albums={ this.state.albums } />;
    return (
      <div id='main' className='row container'>
        <Sidebar backToAlbums={this.backToAlbums} />
        { currentView }
        { this.state.currentSong ? <Player /> : ''} 
      </div>
    )
  }
}
