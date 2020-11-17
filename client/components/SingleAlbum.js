import React from 'react';
import Song from './Song';
import Album from './Album';

export default ({ album, play, active }) => (
  <div id='single-album' className='column'>
    <Album album={album} />
    <Song album={album} play={play} active={active} />
  </div>
)

