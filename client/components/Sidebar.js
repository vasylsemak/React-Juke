import React from 'react';

export default ({ reset }) => (
  <div id='sidebar'>
    <img src='juke.svg' id='logo' />
    <section>
      <h4>
        <a onClick={reset}>ALBUMS</a>
      </h4>
    </section>
  </div>
);
