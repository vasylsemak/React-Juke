import React from 'react';
import Album from './Album';

export default ({ albums, getAlbum }) => (
  <div id='albums' className='row wrap'>
  {
    albums.map(album => (
      <Album album={album} getAlbum={getAlbum} key={album.id} />
    ))
  }
  </div>
);
