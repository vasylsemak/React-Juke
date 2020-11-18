import React from 'react';
import Song from './Song';
import Album from './Album';

export default ({ album, currId, play, pause, playing }) => (
  <div id='single-album' className='column'>
    <Album album={album} />
    <Song album={album} currId={currId} play={play} pause={pause} playing={playing} />
  </div>
)

