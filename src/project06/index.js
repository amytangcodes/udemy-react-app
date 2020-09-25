import React, { useState } from "react";
import Page from "../shared/Page";
import { dropdownData, accordianData, translateData } from "../api/widgetData";
import AccordionComponent from "./components/Accordion";
import SearchComponent from "./components/Search";
import DropdownComponent from "./components/Dropdown";
import TranslateComponent from "./components/Translate";
import SectionHeader from "../shared/SectionHeader";
import { Button, Tab } from "semantic-ui-react";

const Index = () => {
  const [selected, setSelected] = useState(dropdownData[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  const panes = [
    {
      menuItem: "Translate",
      render: () => (
        <Tab.Pane>
          <TranslateComponent data={translateData} header="Choose a language" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Dropdown",
      render: () => {
        return (
          <Tab.Pane>
            <SectionHeader pageHeading="Dropdown Widget" />
            <div className="ui text grid container">
              <div className="row">
                <Button onClick={() => setShowDropdown(!showDropdown)}>
                  Toggle Dropdown
                </Button>
              </div>
              {showDropdown ? (
                <div className="row">
                  <div className="column">
                    <form action="" className="ui form">
                      <DropdownComponent
                        selected={selected}
                        onSelectedChange={setSelected}
                        data={dropdownData}
                        header="Select a color to change the text"
                      />
                    </form>
                  </div>
                </div>
              ) : null}
              <div className="row text-content">
                <div className="column">
                  <p>
                    This text is{" "}
                    <span className={`text-${selected.value}`}>
                      {selected.value}
                    </span>
                  </p>
                </div>
              </div>
            </div>
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
