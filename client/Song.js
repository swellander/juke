import React from 'react';

const Song = ({ index, id, name, currentSong, artistName, albumName, genre, playSong, url }) => {
  let isPlaying = id === currentSong;
  return (
    
    <tr className={isPlaying ? 'active' : ''}>
      <td><i className={isPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle' } onClick={() => playSong(url, id)}/></td>
      <td>{ index }</td>
      <td>{ name }</td>
      <td>{ artistName }</td>
      <td>{ genre }</td>
   </tr>
  )
}

export default Song;
