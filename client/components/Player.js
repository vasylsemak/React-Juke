import React from 'react';

export default ({ active, play, pause, playing }) =>
  !active.id ? null : (
    <div id='player-container'>
      <div id='player-controls'>
        <div className='row center'>
          <i className='fa fa-step-backward'></i>
          <i
            className={playing ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
            onClick={
              playing
                ? pause
                : (() => play(active))
            }
          >
          </i>
          <i className='fa fa-step-forward'></i>
        </div>
      </div>
    </div>
  );
