import React, { useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = ({ activeIndex }) => {
    console.log({ activeIndex });
  };

  const renderedItems = items.map((i) => {
    return (
      <Accordion.Title
        active={activeIndex === i.index}
        index={i.index}
        // onClick={handleClick}
      >
        <Icon name="dropdown" />
        {i.title}
      </Accordion.Title>
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
