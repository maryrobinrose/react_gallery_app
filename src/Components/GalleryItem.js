//Import React library
import React from 'react';

const GalleryItem = props => (
  <li className="photo-container ">
    //Image url
    <img src={props.url} alt=""/>
  </li>
);

//Expose Gallery component to other modules
export default GalleryItem;
