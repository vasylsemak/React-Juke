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
      selectedAlbum: {}
    }
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/albums');
    this.setState(() => ({ albums: data }));
  }

  async handleClick(albumId) {
    const { data } = await axios.get(`/api/albums/${albumId}`);
    this.setState(() => ({ selectedAlbum: data }));
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <div className='container'>
          {!this.state.selectedAlbum.id ? (
            <AllAlbums albums={this.state.albums} getAlbum={this.handleClick}/>
          ) : (
          <SingleAlbum album={this.state.selectedAlbum} />
          )}
        </div>
        <Player />
      </div>
    )
  }
}
