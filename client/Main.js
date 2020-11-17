import React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';
const audio = document.createElement('audio');

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = { albums: [], selectedAlbum: {}, currentSong: {}, isPlaying: false }

    this.getAlbum = this.getAlbum.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/albums');
      this.setState(() => ({ albums: data, play: false }));
    } catch (err) { console.log(err, err.message) }
  }

  async getAlbum(albumId) {
    try {
      const { data } = await axios.get(`/api/albums/${albumId}`);
      this.setState(() => ({ selectedAlbum: data }));
    } catch (err) { console.log(err, err.message) }
  }

  play(audioUrl, songId, songName, artistName) {
    audio.src = audioUrl;
    audio.play();
    this.setState((state) => ({
      isPlaying: !state.isPlaying,
      currentSong: {
        id: songId,
        name: songName,
        audio: audioUrl,
        artist: artistName
      }
    }));
  }

  pause() {
      audio.pause();
      this.setState((state) => ({ isPlaying: !state.isPlaying }));
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
              play={this.play}
              active={this.state.currentSong}
            />
          )}
        </div>
        <Player
          active={this.state.currentSong}
          play={this.play}
          pause={this.pause}
          isPlaying={this.state.isPlaying}
        />
      </div>
    )
  }
}
