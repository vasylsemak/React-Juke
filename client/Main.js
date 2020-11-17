import React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';
const audio = new Audio();

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { albums: [], selectedAlbum: {}, play: false };

    this.togglePlay = this.togglePlay.bind(this);
    this.getAlbum = this.getAlbum.bind(this);
    this.reset = this.reset.bind(this);
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/albums');
    this.setState(() => ({ albums: data, play: false }));
  }

  async getAlbum(albumId) {
    const { data } = await axios.get(`/api/albums/${albumId}`);
    this.setState(() => ({ selectedAlbum: data }));
  }

  togglePlay(audioUrl) {
    if(!this.state.play) {
      audio.src = audioUrl;
      audio.play();
      this.setState((state) => ({ play: !state.play }));
    } else if(this.state.play) {
      audio.pause();
      this.setState((state) => ({ play: !state.play }));
    }
  }

  reset() {
    this.setState(() => ({ selectedAlbum: {} }));
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar reset={this.reset} />
        <div className='container'>
          {!this.state.selectedAlbum.id ? (
            <AllAlbums albums={this.state.albums} getAlbum={this.getAlbum}/>
          ) : (
            <SingleAlbum
              album={this.state.selectedAlbum}
              togglePlay={this.togglePlay}
              play={this.state.play}
            />
          )}
        </div>
        <Player />
      </div>
    )
  }
}
