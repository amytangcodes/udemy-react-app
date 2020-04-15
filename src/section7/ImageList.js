import React from 'react';
import ImageCard from "./ImageCard";

const ImageList = props => {
  const { resultItems } = props;

  const imagesGrid = resultItems.map(image => (
    <ImageCard key={image.id} image={image} />
  ))

  return (
    <div className="image-list">
      {imagesGrid}
    </div>
  )
}

export default ImageList;
