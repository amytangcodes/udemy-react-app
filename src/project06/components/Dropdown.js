import React from "react";
import { Dropdown } from "semantic-ui-react";

const DropdownComponent = ({ data, selected, onSelectedChange }) => {
  const dropdownItems = data.map((dropdownItem) => {
    return (
      <Dropdown.Item
        key={dropdownItem.value}
        text={dropdownItem.label}
        onClick={() => onSelectedChange(dropdownItem)}
      />
    );
  });

  return (
    <div className="section-block">
      <h2>Dropdown Widget</h2>
      <Dropdown text={selected.label}>
        <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
