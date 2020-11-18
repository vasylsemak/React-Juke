import React from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import AllAlbums from './components/AllAlbums';
import SingleAlbum from './components/SingleAlbum';

const AUDIO = document.createElement('audio');

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSongId: 0,
      playing: false
    }

    this.getAlbum = this.getAlbum.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.resume = this.resume.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/albums');
      this.setState(() => ({ albums: data }));
    } catch (err) { console.log(err, err.message) }
  }

  async getAlbum(albumId) {
    try {
      const { data } = await axios.get(`/api/albums/${albumId}`);
      this.setState(() => ({ selectedAlbum: data }));
    } catch (err) { console.log(err, err.message) }
  }

  play(song) {
    AUDIO.src = song.audioUrl;
    AUDIO.load();
    AUDIO.play();
    this.setState(() => ({ currentSongId: song.id, playing: true }));
  }

  pause() {
    AUDIO.pause();
    this.setState(() => ({ playing: false }));
  }

  resume() {
    AUDIO.play();
    this.setState(() => ({ playing: true }));
  }

  reset() {
    this.setState(() => ({ selectedAlbum: {}, currentSongId: 0 }));
  }

  render() {
    return (
      <div id='main' className='row container'>
        <Sidebar reset={this.reset} />
        <div className='container'>
          {
            !this.state.selectedAlbum.id
              ? <AllAlbums albums={this.state.albums} getAlbum={this.getAlbum}/>
              : <SingleAlbum
                  album={this.state.selectedAlbum}
                  currId={this.state.currentSongId}
                  play={this.play}
                  pause={this.pause}
                  playing={this.state.playing}
                />
          }
        </div>
        <Player
          currId={this.state.currentSongId}
          playing={this.state.playing}
          pause={this.pause}
          resume={this.resume}
        />
      </div>
    )
  }
}
