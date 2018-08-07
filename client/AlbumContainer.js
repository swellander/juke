import React from 'react';
import Album from './Album';

const AlbumContainer = ({ albums, selectAlbum }) => {
  return (
    <div className='container'>
      <div id='albums' className='row wrap'>
        { albums.map(album => {
          return <Album 
            key={album.id}
            id={album.id}
            name={album.name}
            artworkUrl={album.artWorkUrl}
            artistId={album.artistId}
            artist={album.artist}
            selectAlbum={selectAlbum}
          /> 
        }) }
      </div>
    </div>
  )
}

export default AlbumContainer;
