import React, { Fragment } from 'react';

export default ({ album, togglePlay }) => (
  <Fragment>
    {
      album.songs.map(s => (
        <tr key={s.id}>
          <td><i
            className='fa fa-play-circle'
            onClick={() => togglePlay(`${s.audioUrl}`)}

            />
          </td>
          <td>{s.id}</td>
          <td>{s.name}</td>
          <td>{album.artist.name}</td>
          <td>{s.genre}</td>
        </tr>
      ))
    }
  </Fragment>
);
