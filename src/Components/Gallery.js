//Import React library
import React from 'react';
import Gallery from './Gallery';
import NoImage from './NoImage';

const Gallery = props => {

  const results = props.data;
  let images;
  if(results.length > 0) {
    images = results.map(image => (
        <GalleryItem url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg}`
        key={image.id} />);
  } else {
      images = <NoImage />

  }


  return(
    <div className="photo-container">
      <h1>Results</h1>
        <ul>
          {images}
        </ul>
    </div>
  );
}

export default GalleryItem;
