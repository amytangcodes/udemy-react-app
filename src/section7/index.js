import React from 'react';
import unsplash from '../api/unsplash'
import Page from "../shared/Page";
import SearchBar from "../shared/SearchBar";
import ImageList from "./ImageList";

class Section7 extends React.Component {
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
      <Page heading="Search Bar" subheading="Handling User Input with Forms and Events">
        <div className="search-bar ui container">
          <SearchBar onSubmit={this.onSearchSubmit} resultItems={resultItems}/>
          <div className="results-container">
            <h3 className="section-header">Image Search Results</h3>
            <ImageList resultItems={resultItems}/>
          </div>
        </div>
      </Page>
    );
  }
};

export default Section7;