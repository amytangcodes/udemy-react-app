import React from 'react';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Brrrr, it's chilly!",
    iconName: "snowflake"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonsDisplay = props => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName} = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon-left icon massive`}></i>
      <h1>{text}</h1>
      <i className={`${iconName} icon-right icon massive`}></i>
    </div>
  );
};

export default SeasonsDisplay;