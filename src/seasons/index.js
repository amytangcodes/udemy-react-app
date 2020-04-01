import React from 'react';

class Seasons extends React.Component {
  // very first function that will be called before anything else
  // so a good place to intialize state
  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: ""
    }

    window.navigator.geolocation.getCurrentPosition(
      // a callback
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      // a failure callback
      err => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  render() {
    const { lat, long, errorMessage } = this.state;
    if (errorMessage) {
      return <h3>{errorMessage}</h3>
    }

    return (
      <div>
        <h1>Seasons</h1>
        <p>Latitude: {lat}</p>
        <p>Longitude: {long}</p>
      </div>
    );
  }
}

export default Seasons;
