import React from 'react';
import SeasonsDisplay from './SeasonsDisplay';

class Seasons extends React.Component {
  state = {
    lat: null,
    long: null,
    errorMessage: ""
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { lat, long, errorMessage } = this.state;
    if (errorMessage && !lat && !long) {
      return <h3>{errorMessage}</h3>
    }

    if (!errorMessage && lat && long) {
      return <SeasonsDisplay lat={lat} long={long}/>
    }

    return <h3>Loading!</h3>
  }
}

export default Seasons;
