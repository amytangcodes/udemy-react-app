import React, { useState } from "react";

const DropdownComponent = ({ data, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  const dropdownItems = data.map((dropdownItem) => {
    if (dropdownItem.value === selected.value) {
      return null;
    }

    return (
      <div
        key={dropdownItem.value}
        className="item"
        onClick={() => onSelectedChange(dropdownItem)}
      >
        {dropdownItem.label}
      </div>
    );
  });

  return (
    <div className="section-block">
      <h2>Dropdown Widget</h2>
      <div className="ui form">
        <div className="field">
          <label className="labe">Select a Color</label>
          <div
            onClick={() => setOpen(!open)}
            className={`ui selection dropdown ${open ? "visible active" : ""}`}
          >
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div className={`menu ${open ? "visible transition" : ""}`}>
              {dropdownItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownComponent;
