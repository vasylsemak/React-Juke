import React from 'react';
import Album from './Album';

export default ({ albums }) => (
  <div id='albums' className='row wrap'>
    <Album albums={albums} />
  </div>
);
