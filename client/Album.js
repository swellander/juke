import React from 'react';

const Album = ({ selectAlbum, id, name, artworkUrl, artistId, artist }) => {
  return(
    <div className='album' onClick={ () => selectAlbum(id) }>
      <a>
        <img src={ artworkUrl } />
        <p>{ name }</p>
        <small>{ artist.name }</small>
      </a>
    </div>
  )
}

export default Album;
