//Get the React object from the react module
import React from 'react';

const Gallery = props => (
  <li className="photo-container ">
    <img src={props.url} alt=""/>
  </li>
);

//Expose Gallery component to other modules
export default Gallery;
