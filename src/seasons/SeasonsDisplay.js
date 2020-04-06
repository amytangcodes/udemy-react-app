import React from 'react';

const SeasonsDisplay = props => {
  const { lat, long } = props;
  return (
    <div >
      <h1>Seasons</h1>
      <p>Latitude: {lat}</p>
      <p>Longitude: {long}</p>
    </div>
  );
};

export default SeasonsDisplay;