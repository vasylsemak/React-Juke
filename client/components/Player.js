import React from 'react';

export default ({ active, play, pause, isPlaying }) =>
  !active.id ? null : (
    <div id='player-container'>
      <div id='player-controls'>
        <div className='row center'>
          <i className='fa fa-step-backward'></i>
          <i className='fa fa-pause-circle' onClick={isPlaying ? (() => pause()) : (() => play(active.audioUrl))}></i>
          <i className='fa fa-step-forward'></i>
        </div>
      </div>
    </div>
  );
