import React, { useState } from "react";
import Page from "../shared/Page";
import { dropdownData, accordianData } from "../api/projectSixData";
import AccordionComponent from "./components/Accordion";
import SearchComponent from "./components/Search";
import DropdownComponent from "./components/Dropdown";

const Index = () => {
  const [selected, setSelected] = useState(dropdownData[0]);

  return (
    <Page heading="React Hooks | Widgets App">
      <DropdownComponent
        selected={selected}
        onSelectedChange={setSelected}
        data={dropdownData}
        initialText="Select Color"
      />
      <SearchComponent />
      <AccordionComponent items={accordianData} />
    </Page>
  );
};

export default Index;
