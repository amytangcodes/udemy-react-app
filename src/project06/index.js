import React, { useState } from "react";
import Page from "../shared/Page";
import { dropdownData, accordianData } from "../api/projectSixData";
import AccordionComponent from "./components/Accordion";
import SearchComponent from "./components/Search";
import DropdownComponent from "./components/Dropdown";
import { Button, Tab } from "semantic-ui-react";

const Index = () => {
  const [selected, setSelected] = useState(dropdownData[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  const panes = [
    {
      menuItem: "Dropdown",
      render: () => {
        return (
          <Tab.Pane>
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
          </Tab.Pane>
        );
      },
    },
    {
      menuItem: "Search",
      render: () => (
        <Tab.Pane>
          <SearchComponent />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Accordian",
      render: () => (
        <Tab.Pane>
          <AccordionComponent items={accordianData} />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Page heading="React Hooks | Widgets App">
      <Tab panes={panes} />
    </Page>
  );
};

export default Index;
