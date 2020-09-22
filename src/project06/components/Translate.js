import React, { useState, Fragment } from "react";
import DropdownComponent from "./Dropdown";
import ConvertComponent from "./Convert";
import SectionHeader from "../../shared/SectionHeader";

// const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Translate = ({ data, header }) => {
  const [language, setLanguage] = useState(data[0]);
  const [text, setText] = useState("");

  return (
    <Fragment>
      <SectionHeader pageHeading="Translate Widget" />
      <div className="ui text container">
        <form className="ui form">
          <div className="field">
            <label>Enter Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <DropdownComponent
            selected={language}
            onSelectedChange={setLanguage}
            data={data}
            header={header}
          />
        </form>

        <hr />
        <h3 className="ui header">Output</h3>
        <ConvertComponent text language />
      </div>
    </Fragment>
  );
};

export default Translate;
