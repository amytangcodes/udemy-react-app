import React from 'react';

const ImageList = props => {
  const { images } = props;

  const imagesGrid = images.map(({id, urls, description}) => (
    <img key={id} src={urls.regular} alt={description}/>
  ))

  return (
    <div className="image-list">
      {imagesGrid}
    </div>
  )
}

export default ImageList;
