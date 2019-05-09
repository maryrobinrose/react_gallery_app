//can be reused to display the sets of images for each of the three topic categories you wish to display, like sunsets, waterfalls and rainbows, for example.

import React from 'react';

const Gallery = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Gallery;
