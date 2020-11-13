import React from 'react';
import OneAlbum from './OneAlbum';

export default () => (
  <div className='container'>
    <div id='albums' className='row wrap'>
      <OneAlbum name='ALBUM 1' artist='Artist Name' />
      <OneAlbum name='ALBUM 2' artist='Artist Name' />
    </div>
  </div>
);
