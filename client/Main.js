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
      playing: false,
      songList: []
    }

    this.getAlbum = this.getAlbum.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
    this.resume = this.resume.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/albums');
      this.setState({ albums: data });
    } catch (err) { console.log(err, err.message) }
  }

  async getAlbum(albumId) {
    try {
      const { data } = await axios.get(`/api/albums/${albumId}`);
      this.setState({ selectedAlbum: data });
    } catch (err) { console.log(err, err.message) }
  }

  play(song, songs) {
    AUDIO.src = song.audioUrl;
    AUDIO.load();
    AUDIO.play();
    this.setState({ currentSongId: song.id, playing: true, songList: songs });
  }

  pause() {
    AUDIO.pause();
    this.setState({ playing: false });
  }

  resume() {
    AUDIO.play();
    this.setState({ playing: true });
  }

  nextSong() {
    const { songList, currentSongId } = this.state;
    const nextSongIdx = songList.map(s => s.id).indexOf(currentSongId) + 1;

    if(nextSongIdx >= songList.length) {
      AUDIO.pause();
      AUDIO.src = '';
      this.setState({ currentSongId: 0, playing: false, songList: [] });
    } else {
      AUDIO.pause();
      this.play(songList[nextSongIdx], songList);
    }
  }

  prevSong() {
    const { songList, currentSongId } = this.state;
    const prevSongIdx = songList.map(s => s.id).indexOf(currentSongId) - 1;

    if(prevSongIdx < 0) {
      AUDIO.pause();
      AUDIO.src = '';
      this.setState({ currentSongId: 0, playing: false, songList: [] })
    } else {
      AUDIO.pause();
      this.play(songList[prevSongIdx], songList);
    }
  }

  reset() {
    this.setState({ selectedAlbum: {}, currentSongId: 0 });
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
          nextSong={this.nextSong}
          prevSong={this.prevSong}
        />
      </div>
    )
  }
}
