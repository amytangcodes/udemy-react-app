import React from 'react';

const Page = (props) => {
  const {heading, subheading, children} = props;

  return (
    <section>
      <div className="ui container">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <div className="content">{children}</div>
      </div>
    </section>
  );
};

export default Page;