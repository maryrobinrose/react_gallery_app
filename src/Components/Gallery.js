//Import React library
import React from 'react';
import Gallery from './Gallery';
import NoImage from './NoImage';

const GalleryItem = props => {

  const results = props.data;
  let images;
  if(results.length > 0) {
    images = results.map(image => <Gallery url={} key={image.id}/>);
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
