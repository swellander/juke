import React from 'react';

const Song = ({ isPaused, index, id, name, currentSong, artistName, albumName, genre, controls, url }) => {
  let isCurrentSong = id === currentSong;
  let handleClick;
  if (isPaused) handleClick = controls.play;
  else if (isCurrentSong) handleClick = controls.pause;
  else handleClick = controls.play;
  return (
    
    <tr className={isCurrentSong ? 'active' : ''}>
      <td><i className={isCurrentSong && !isPaused ? 'fa fa-pause-circle' : 'fa fa-play-circle' } onClick={() => handleClick(url, id)}/></td>
      <td>{ index }</td>
      <td>{ name }</td>
      <td>{ artistName }</td>
      <td>{ genre }</td>
   </tr>
  )
}

export default Song;
