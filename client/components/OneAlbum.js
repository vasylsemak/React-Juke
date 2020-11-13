import React, { Fragment } from 'react';

export default ({ albums }) => (
  <Fragment>
    {
      albums.map(a => (
        <div className='album' key={a.id}>
          <a>
            <img src={a.artworkUrl} />
            <p>{a.name}</p>
            <small>{a.artist.name}</small>
          </a>
        </div>
      ))
    }
  </Fragment>
);
