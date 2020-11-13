import React from 'react';
import OneAlbum from './OneAlbum';

export default ({ albums }) => (
  <div className='container'>
    <div id='albums' className='row wrap'>
      <OneAlbum albums={albums} />
    </div>
  </div>
);
