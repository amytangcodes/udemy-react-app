import React, { useState, useEffect, useRef } from "react";

const DropdownComponent = ({ data, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (evt) => {
      // console.log(evt.target);
      if (ref.current.contains(evt.target)) {
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

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
      <div ref={ref} className="ui form">
        <div className="field">
          <label className="labe">Select a color to change the text</label>
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
      <div className="text-content">
        <p
          className={`text-${selected.value}`}
        >{`This text is ${selected.value}`}</p>
      </div>
    </div>
  );
};

export default DropdownComponent;
