import React, { Fragment, useState } from "react";
import Page from "../shared/Page";
import Route from "./components/Route";
import { dropdownData, accordianData, translateData } from "../api/widgetData";
import SectionHeader from "../shared/SectionHeader";

import AccordionComponent from "./components/Accordion";
import SearchComponent from "./components/Search";
import DropdownComponent from "./components/Dropdown";
import TranslateComponent from "./components/Translate";

const Project07 = () => {
  const [selected, setSelected] = useState(dropdownData[0]);

  return (
    <Page
      heading="Project 7 | Navigation From Scratch"
      subheading="Let's build a navigation component"
    >
      <div className="ui text container">
        <Route path="/">
          <AccordionComponent items={accordianData} />
        </Route>
        <Route path="/list">
          <SearchComponent />
        </Route>
        <Route path="/translate">
          <TranslateComponent data={translateData} header="Choose a language" />
        </Route>
        <Route path="/dropdown">
          <Fragment>
            <SectionHeader pageHeading="Dropdown Widget" />
            <form action="" className="ui form">
              <DropdownComponent
                selected={selected}
                onSelectedChange={setSelected}
                data={dropdownData}
                header="Select a color to change the text"
              />
            </form>
            <div className="text-content">
              <p>
                This text is{" "}
                <span className={`text-${selected.value}`}>
                  {selected.value}
                </span>
              </p>
            </div>
          </Fragment>
        </Route>
      </div>
    </Page>
  );
};

export default Project07;
