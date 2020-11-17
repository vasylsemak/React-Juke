import React, { Fragment } from 'react';

export default ({ album, play, active }) => (
  <Fragment>
    <table id='songs'>
      <tbody>
        <tr className='gray'>
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        {
          album.songs.map(s => (
            <tr key={s.id} className={active.id === s.id ? 'active' : ''}>
              <td><i
                className={active.id === s.id ? '' : 'fa fa-play-circle'}
                onClick={() =>
                  play(`${s.audioUrl}`, s.id, s.name, album.artist.name)}
                />
              </td>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{album.artist.name}</td>
              <td>{s.genre}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </Fragment>
)
