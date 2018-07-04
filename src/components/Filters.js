import React from "react";
import { Dropdown } from "semantic-ui-react";

const rentOptions = [
  { key: "rent20", text: "$2000 or Less", value: "2000" },
  { key: "rent25", text: "$2500 or Less", value: "2500" },
  { key: "rent30", text: "$3000 or Less", value: "3000" }
];

const availOptions = [
  { key: "months1", text: "Within 1 Month", value: "1" },
  { key: "months3", text: "Within 3 Months", value: "3" },
  { key: "months6", text: "Within 6 Months", value: "6" }
];

const petOptions = [
  { key: "petYes", text: "Pet Friendly", value: "true" },
  { key: "petNo", text: "Not Pet Friendly", value: "false" }
];

const Filters = props => {
  return (
    <div>
      <Dropdown
        onChange={(e, data) => props.rent(e, data.value)}
        defaultValue="2500"
        fluid
        selection
        options={rentOptions}
      />
      <Dropdown
        onChange={(e, data) => props.months(e, data.value)}
        defaultValue="3"
        fluid
        selection
        options={availOptions}
      />
      <Dropdown
        onChange={(e, data) => props.pet(e, data.value)}
        defaultValue="true"
        fluid
        selection
        options={petOptions}
      />
    </div>
  );
};

export default Filters;
