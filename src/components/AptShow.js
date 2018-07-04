import React, { Component } from "react";
import AptSvg from "../components/AptSvg";

class AptShow extends Component {
  render() {
    return (
      <div>
        {this.props.currentApt ? <AptSvg /> : <svg viewBox="-10 0 550 900" />}
      </div>
    );
  }
}

export default AptShow;
