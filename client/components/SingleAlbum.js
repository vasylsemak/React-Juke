import React from 'react';
import Song from './Song';

export default ({ album }) => (
  <div id='single-album' class='column'>
    <div class='album'>
      <a>
        <img src={album.artworkUrl} />
        <p>{album.name}</p>
        <small>{album.artist.name}</small>
      </a>
    </div>
    <table id='songs'>
      <tbody>
        <tr class='gray'>
          <td />
          <td>#</td>
          <td>Name</td>
          <td>Artist</td>
          <td>Genre</td>
        </tr>
        <Song album={album} />
      </tbody>
    </table>
  </div>
)

