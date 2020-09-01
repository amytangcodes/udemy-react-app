import React from "react";
import Page from "../shared/Page";
import AccordionComponent from "./AccordionComponent";
import SearchComponent from "./SearchComponent";

const items = [
  {
    title: "What is React?",
    content: "A JavaScript library for building user interfaces",
  },
  {
    title: "Why use React?",
    content: "React is a fav JS library amongst engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];

const Index = () => {
  return (
    <Page heading="React Hooks | Widgets App">
      <SearchComponent />
      <AccordionComponent items={items} />
    </Page>
  );
};

export default Index;
