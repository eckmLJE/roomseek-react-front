import React from "react";
import { BrA, BrB, BrC, BrD, BrE } from "./BrSvg";

const BrShow = (props) => {
  return (
    <div>
      {props.currentBr ? <BrA /> : <svg viewBox="0 -10 185 280" />}
    </div>
  );
};

export default BrShow;
