import React from "react";
import { Button } from "semantic-ui-react";

const AptNav = props => {
  return (
    <div>
      <Button.Group basic size="huge" vertical widths="3">
        <Button onClick={() => props.selectApartment(1)} >Apartment 1</Button>
        <Button onClick={() => props.selectApartment(2)}>Apartment 2</Button>
        <Button onClick={() => props.selectApartment(3)}>Apartment 3</Button>
        <Button onClick={() => props.selectApartment(4)}>Apartment 4</Button>
      </Button.Group>
    </div>
  );
};

export default AptNav;
