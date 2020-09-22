import React from "react";

const SectionHeader = ({ pageHeading, subHeading, pageDescription }) => {
  return (
    <div className="ui container">
      <h1 className="ui dividing header">{pageHeading}</h1>
      {subHeading ? <h3 className="first">{subHeading}</h3> : null}
      {pageDescription ? <p>{pageDescription}</p> : null}
    </div>
  );
};

export default SectionHeader;
