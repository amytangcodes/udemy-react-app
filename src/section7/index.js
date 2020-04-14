import React from 'react';
import unsplash from '../api/unsplash'
import Page from "../pageLayout/Page";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class Section7 extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (text) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: text }
    });

    this.setState({
      images: response.data.results
    });
  }

  render() {
    const { images } = this.state;

    return (
      <Page heading="Search Bar" subheading="Handling User Input with Forms and Events">
        <div className="search-bar ui container">
          <SearchBar onSubmit={this.onSearchSubmit} images={images}/>
          <div className="results-container">
            <h3 className="section-header">Image Search Results</h3>
            <ImageList images={images}/>
          </div>
        </div>
      </Page>
    );
  }
};

export default Section7;