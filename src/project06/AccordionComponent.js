import React, { Fragment, useState } from "react";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    // const active = index === activeIndex ? "active" : "";
    return (
      <Fragment key={index}>
        <Accordion.Title
          active={activeIndex === index}
          index={index}
          onClick={() => handleClick(index)}
        >
          <Icon name="dropdown" />
          {index} {item.title}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === index}>
          <p>{item.content}</p>
        </Accordion.Content>
      </Fragment>
    );
  });

  return (
    <div>
      <h2>Accordion Widget</h2>
      <Accordion>{renderedItems}</Accordion>
    </div>
  );
};

export default AccordionComponent;
