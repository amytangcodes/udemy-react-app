import React from 'react';
import axios from 'axios';
import Page from "../pageLayout/Page";
import SearchBar from "./SearchBar";

class Section7 extends React.Component {
  onSearchSubmit(text) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: text },
      headers: {
        Authorization: 'Client-ID f7Ai5juTA6vfIYjMLfVE4lJ7PJyEBqqNuV-cQ_39Lw8'
      }
    });
  }

  render() {
    return (
      <Page heading="Search Bar" subheading="Handling User Input with Forms and Events">
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
      </Page>
    );
  }
};

export default Section7;