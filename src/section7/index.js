import React from 'react';
import Page from "../pageLayout/Page";
import SearchBar from "./SearchBar";

const Section7 = () => {

  return (
    <Page heading="Search Bar" subheading="Handling User Input with Forms and Events">
      <div className="ui container">
        <SearchBar/>
      </div>
    </Page>
  );
};

export default Section7;