import React from 'react';

export default ({ album, getAlbum }) => (
  <div className='album'>
    <a onClick={() => getAlbum(album.id)}>
      <img src={album.artworkUrl} />
      <p>{album.name}</p>
      <small>{album.artist.name}</small>
    </a>
  </div>
)
