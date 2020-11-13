import React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      isSelected: false,
      selectedAlbum: {
        "id": 3,
        "name": "Chain React-ion",
        "artworkUrl": "default-album.jpg",
        "artistId": 1,
        "artist": {
          "id": 1,
          "name": "The Crash Test Dummies",
        },
        "songs": [
          {
            "id": 13,
            "name": "Set Some State",
            "audioUrl": "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
            "genre": "Instrumental",
            "albumId": 2,
            "artistId": 1
          }
        ]
      }
    }
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/albums');
    this.setState(() => ({ albums: data }));
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div class='container'>
          {/* <AllAlbums albums={this.state.albums} /> */}
          <SingleAlbum album={this.state.selectedAlbum} />
        </div>
        <Player />
      </div>
    )
  }
}
