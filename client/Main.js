import React from 'react';
import Sidebar from './components/Sidebar';
import AllAlbums from './components/AllAlbums';
import Player from './components/Player';

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums />
        <Player />
      </div>
    )
  }
}
