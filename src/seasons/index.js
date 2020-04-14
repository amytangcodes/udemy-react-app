import React from 'react';
import Page from "../pageLayout/Page";
import SeasonsDisplay from './SeasonsDisplay';
import Spinner from './../utils/Spinner';

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

  renderContent() {
    const { lat, long, errorMessage } = this.state;
    if (errorMessage && !lat && !long) {
      return <h3>Error: {errorMessage}</h3>
    }

    if (!errorMessage && lat && long) {
      return <SeasonsDisplay lat={lat} long={long}/>
    }

    return <Spinner message="Please accept location request"/>
  }

  render() {
    return (
      <Page heading="Seasons Component">
        <div className="content-wrapper border red">
          {this.renderContent()}
        </div>
      </Page>

    )

  }
}

export default Seasons;
