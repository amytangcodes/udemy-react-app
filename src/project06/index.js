import React, { useState } from "react";
import Page from "../shared/Page";
import { dropdownData, accordianData } from "../api/projectSixData";
import AccordionComponent from "./components/Accordion";
import SearchComponent from "./components/Search";
import DropdownComponent from "./components/Dropdown";
import { Button } from "semantic-ui-react";

const Index = () => {
  const [selected, setSelected] = useState(dropdownData[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <Page heading="React Hooks | Widgets App">
      <Button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </Button>
      {showDropdown ? (
        <DropdownComponent
          selected={selected}
          onSelectedChange={setSelected}
          data={dropdownData}
          initialText="Select Color"
        />
      ) : null}
      <SearchComponent />
      <AccordionComponent items={accordianData} />
    </Page>
  );
};

export default Index;
