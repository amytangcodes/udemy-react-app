import React from 'react';
import Page from "../pageLayout/Page";
import SearchBar from "./SearchBar";

class Section7 extends React.Component {
  onSearchSubmit(text) {
    console.log({text});
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