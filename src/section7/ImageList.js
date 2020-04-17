import React from 'react';
import ImageCard from "./ImageCard";

const ImageList = ({ resultItems }) => {
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
