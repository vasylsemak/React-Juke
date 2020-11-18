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
          album.songs.map((s, idx) => {
            const isPlaying = currId === s.id;

            return (
              <tr key={s.id} className={isPlaying ? 'active' : ''}>
                <td>
                  <i
                    className={isPlaying && playing ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
                    onClick={isPlaying ? pause : (() => play(s, album.songs))}
                  />
                </td>
                <td>{idx + 1}</td>
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
