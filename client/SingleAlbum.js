import React from 'react';
import Song from './Song';

const SingleAlbum = ({ isPaused, currentSong, controls, album })=> {
  return (
    <div className="container">
      <div id='single-album' className='column'>
        <div className='album'>
          <a>
            <img src={ album.artWorkUrl } />
            <p>{ album.name }</p>
            <small>{ album.artist.name }</small>
          </a>
        </div>
        <table id='songs'>
          <tbody>
            <tr className='gray'>
              <td />
              <td>#</td>
              <td>Name</td>
              <td>Artist</td>
              <td>Genre</td>
            </tr>
            { album.songs.map( (song, index) => {
              return <Song 
                key={ song.id }
                id={ song.id }
                index={ index + 1 }
                name={ song.name }
                albumName={ album.name }
                artistName={ album.artist.name }
                genre={ song.genre }
                currentSong={ currentSong }
                url={ song.audioUrl }
                controls={ controls }
                isPaused = { isPaused }
              /> 
            }) }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SingleAlbum;
