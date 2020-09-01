import React from "react";
import Page from "../shared/Page";
import SeasonsDisplay from "./SeasonsDisplay";
import Spinner from "./../shared/Spinner";

class Project02 extends React.Component {
  state = {
    lat: 43.6532,
    long: -79.3832,
    errorMessage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    const { lat, long, errorMessage } = this.state;
    if (errorMessage && !lat && !long) {
      return <h3>Error: {errorMessage}</h3>;
    }

    if (!errorMessage && lat && long) {
      return <SeasonsDisplay lat={lat} long={long} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    console.log(this.state.lat, this.state.long);
    return (
      <Page
        heading="Seasons Project | Structuring Apps with Class-Based Components"
        subheading="Simple application working with class-based components and lifecycle."
      >
        <div className="content-wrapper border red">{this.renderContent()}</div>
      </Page>
    );
  }
}

export default Project02;
