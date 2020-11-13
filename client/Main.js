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
      albums: []
    }
  }

  // async componentDidMount() {
  //   const { data } = await axios.get('/api/albums');
  //   this.setState(() => ({ albums: data }));
  // }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div class='container'>
          {/* <AllAlbums albums={this.state.albums} /> */}
          <SingleAlbum />
        </div>
        <Player />
      </div>
    )
  }
}
