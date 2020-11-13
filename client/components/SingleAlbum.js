import React from 'react';

export default class SingleAlbum extends React.Component {
  render() {
    return (
      <div id='single-album' class='column'>
        <div class='album'>
          <a>
            <img src='default-album.jpg' />
            <p>ALBUM 2</p>
            <small>Artist Name</small>
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
            <tr>
              <td><i class='fa fa-play-circle' /></td>
              <td>1</td>
              <td>Song Name</td>
              <td>Artist Name</td>
              <td>Song Genre</td>
            </tr>
            <tr>
              <td><i class='fa fa-play-circle' /></td>
              <td>2</td>
              <td>Song Name</td>
              <td>Artist Name</td>
              <td>Song Genre</td>
            </tr>
            <tr>
              <td><i class='fa fa-play-circle' /></td>
              <td>3</td>
              <td>Song Name</td>
              <td>Artist Name</td>
              <td>Song Genre</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
