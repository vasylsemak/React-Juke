import React from 'react';

export default ({ getAllAlbums }) => (
  <div id='sidebar'>
    <img src='juke.svg' id='logo' />
    <section>
      <h4>
        <a onClick={getAllAlbums}>ALBUMS</a>
      </h4>
    </section>
  </div>
);
