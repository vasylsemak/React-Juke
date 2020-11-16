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
    this.getAlbum = this.getAlbum.bind(this);
    this.getAllAlbums = this.getAllAlbums.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/albums');
    this.setState(() => ({ albums: data }));
  }

  async getAlbum(albumId) {
    const { data } = await axios.get(`/api/albums/${albumId}`);
    this.setState(() => ({ selectedAlbum: data }));
  }

  getAllAlbums() {
    this.setState(() => ({ selectedAlbum: {} }));
  }

  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar getAllAlbums={this.getAllAlbums} />
        <div className='container'>
          {!this.state.selectedAlbum.id ? (
            <AllAlbums albums={this.state.albums} getAlbum={this.getAlbum}/>
          ) : (
          <SingleAlbum album={this.state.selectedAlbum} />
          )}
        </div>
        <Player />
      </div>
    )
  }
}
