import React, { Fragment } from 'react';

export default ({ album }) => (
  <Fragment>
    {
      album.songs.map(s => (
        <tr key={s.id}>
          <td><i className='fa fa-play-circle' /></td>
          <td>{s.id}</td>
          <td>{s.name}</td>
          <td>{album.artist.name}</td>
          <td>{s.genre}</td>
        </tr>
      ))
    }
  </Fragment>
);
