import React from 'react';

const Gallery = props => (
  <li className="photo-container ">
    <img src={props.url} alt=""/>
  </li>
);

export default Gallery;
