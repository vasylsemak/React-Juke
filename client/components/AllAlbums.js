import React from 'react';
import Album from './Album';

export default ({ albums, getAlbum }) => (
  <div id='albums' className='row wrap'>
    <Album albums={albums} getAlbum={getAlbum} />
  </div>
);
