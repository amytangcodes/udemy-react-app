import React, { Fragment, useState } from "react";
import SectionHeader from "../../shared/SectionHeader";
import { Accordion, Icon } from "semantic-ui-react";

const AccordionComponent = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    // const active = index === activeIndex ? "active" : "";
    return (
      <div key={index}>
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
      </div>
    );
  });

  return (
    <Fragment>
      <SectionHeader pageHeading="Accordion Widget" />
      <Accordion>{renderedItems}</Accordion>
    </Fragment>
  );
};

export default AccordionComponent;
