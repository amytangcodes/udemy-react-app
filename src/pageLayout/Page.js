import React from 'react';

const Page = (props) => {
  const {heading, subheading, children} = props;

  return (
    <section>
      <h1>{heading}</h1>
      <h3>{subheading}</h3>
      <div className="content">{children}</div>
    </section>
  );
};

export default Page;