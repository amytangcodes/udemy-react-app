import React from 'react';

const Page = ({ heading, subheading, children, classname }) => {
  return (
    <section className={classname}>
      <div className="ui container">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <div className="content">{children}</div>
      </div>
    </section>
  );
};

export default Page;