import React, { Fragment } from 'react';

export default ({ album, currId, play, pause, playing }) => (
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
          album.songs.map(s => {
            const isPlaying = currId === s.id;

            return (
              <tr key={s.id} className={isPlaying ? 'active' : ''}>
                <td>
                  <i
                    className={isPlaying && playing ? '' : 'fa fa-play-circle'}
                    onClick={isPlaying ? pause : (() => play(s))}
                  />
                </td>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{album.artist.name}</td>
                <td>{s.genre}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  </Fragment>
)
