import React from 'react';

const GalleryItem = props => (
  <li className="photo-container li:hover img">
    <img src={props.url} alt=""/>
  </li>
);

export default GalleryItem;
