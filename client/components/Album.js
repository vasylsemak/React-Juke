import React from 'react';

export default ({ album, getAlbum }) => {
  const name = album.name;
  const albumId = album.id;
  const artworkUrl = album.artworkUrl;
  const artistName = album.artist.name;

  return (
    <div className='album'>
      <a onClick={() => getAlbum(albumId)}>
        <img src={artworkUrl} />
        <p>{name}</p>
        <small>{artistName}</small>
      </a>
    </div>
  )
}
