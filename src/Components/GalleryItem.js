import React from 'react';
import Gallery from './Gallery';
import NoImage from './NoImage';

const GalleryItem = props => {

  const results = props.data;
  let gallery;
  if(results.length > 0) {
    gallery = results.map(image =>
      <Gallery url={image.images.fixed_height} key={image.id}/>);
  } else {
    Gallery = <NoImage />
  }


  return(
    <ul className="photo-container">
      {gallery}
    </ul>
  );
}

export default GalleryItem;
