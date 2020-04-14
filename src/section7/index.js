import React from 'react';
import axios from 'axios';
import Page from "../pageLayout/Page";
import SearchBar from "./SearchBar";

class Section7 extends React.Component {
  state = {
    images: []
  }

  onSearchSubmit = async (text) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: text },
      headers: {
        Authorization: 'Client-ID f7Ai5juTA6vfIYjMLfVE4lJ7PJyEBqqNuV-cQ_39Lw8'
      }
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
            <h3 class="section-header">Image Search Results</h3>
            <div className="ui grid">
              {images.map(image => (
                <div className="four wide column">
                  <img src={image.urls.small} alt=""/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Page>
    );
  }
};

export default Section7;