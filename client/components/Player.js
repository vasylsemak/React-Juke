import React from 'react';

export default ({ currId, playing, pause, resume, nextSong, prevSong }) =>
  !currId ? null : (
    <div id='player-container'>
      <div id='player-controls'>
        <div className='row center'>
          <i className='fa fa-step-backward' onClick={prevSong}></i>
          <i
            className={playing ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
            onClick={playing ? pause : resume}
          >
          </i>
          <i className='fa fa-step-forward' onClick={nextSong}></i>
        </div>
      </div>
    </div>
  );
