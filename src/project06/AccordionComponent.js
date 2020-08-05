import React, { Fragment, useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    console.log({ index });
  };

  const renderedItems = items.map((i, index) => {
    return (
      <Fragment key={index}>
        <Accordion.Title
          // active={activeIndex === index}
          index={index}
          onClick={() => handleClick(index)}
        >
          <Icon name="dropdown" />
          {index} {i.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === index}>
          <p>{i.content}</p>
        </Accordion.Content>
      </Fragment>
    );
  });

  return (
    <div>
      <h1>Accordion</h1>
      <Accordion>{renderedItems}</Accordion>
    </div>
  );
};

export default AccordionComponent;
