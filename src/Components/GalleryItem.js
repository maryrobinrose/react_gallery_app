import React from 'react';
import Gallery from './Gallery';
import NoImage from './NoImage';

const GalleryItem = props => {

  const results = props.data;
  let gallery;
    if(results.length > 0) {
      gallery = results.map(image => <Gallery url={} key={image.id}/>);
    } else {
      gallery = <NoImage />
    }


  return(
    <div className="photo-container">
      <h1>Results</h1>
        <ul>
          {gallery}
        </ul>
    </div>
  );
}

export default GalleryItem;
