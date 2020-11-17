import React, { Fragment } from 'react';
const audio = new Audio('https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3');

export default class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
    this.togglePlaying = this.togglePlaying.bind(this);
  }

  togglePlaying() {
    if(!this.state.playing) {
      audio.play();
      this.setState((state) => ({ playing: !state.playing }));
    } else if(this.state.playing) {
      audio.pause();
      this.setState((state) => ({ playing: !state.playing }));
    }
  }

  render() {
    const { album } = this.props;
    return (
      <Fragment>
        {
          album.songs.map(s => (
            <tr key={s.id}>
              <td><i className='fa fa-play-circle' onClick={this.togglePlaying} /></td>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{album.artist.name}</td>
              <td>{s.genre}</td>
            </tr>
          ))
        }
      </Fragment>
    )
  }
}


