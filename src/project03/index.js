import React from 'react';
import unsplash from '../api/unsplash'
import Page from "../shared/Page";
import SearchBar from "../shared/SearchBar";
import ImageList from "./ImageList";

class Project03 extends React.Component {
  state = {
    resultItems: []
  }

  onSearchSubmit = async (text) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: text }
    });

    this.setState({
      resultItems: response.data.results
    });
  }

  render() {
    const { resultItems } = this.state;

    return (
      <Page heading="Image Gallery" subheading="Handling User Input with Forms and Events" classname="search-bar">
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} resultItems={resultItems} />
          <div className="results-container">
            <h3 className="section-header">Image Search Results</h3>
            <ImageList resultItems={resultItems} />
          </div>
        </div>
      </Page>
    );
  }
};

export default Project03;