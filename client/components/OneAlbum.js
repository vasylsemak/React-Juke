import React from 'react';

export default (props) => (
  <div className='album'>
    <a>
      <img src='default-album.jpg' />
      <p>{props.name}</p>
      <small>{props.artist}</small>
    </a>
  </div>
);
