import React from 'react';

const NoImage = props => (
  <li className='photo-container li'>
    <i className="photo-container not-found">sentiment_very_dissatisfied</i>
    <h3>Sorry, no images match your search.</h3>
  </li>
);

export default NoImage;
