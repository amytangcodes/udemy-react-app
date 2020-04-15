import React from 'react';
import Page from "../shared/Page";
import SearchBar from "../shared/SearchBar";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

class index extends React.Component {
  state = {
    resultItems: []
  }

  onSearchSubmit = async (text) => {
    console.log({text});
  }

  render() {
    const { resultItems } = this.state;

    return (
      <Page heading="Youtube App" subheading="Test your React Mastery!">
        <div className="youtube-app ui container">
          <SearchBar onSubmit={this.onSearchSubmit} resultItems={resultItems} />
          <div className="results-container">
            <h3>Video Search Results</h3>
            <div className="results-content">
              <VideoDetail/>
              <VideoList/>
            </div>
          </div>
        </div>
      </Page>
    )
  }
}

export default index;