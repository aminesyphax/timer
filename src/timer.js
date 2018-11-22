import React, { Component } from "react";
import Buttons from "./Buttons";

class timer extends Component {
  render() {
    return (
      <div className="Main-Container">
        <div className="Timer">
          <span id="clock">00:30:59</span>
          <span id="type">Hour Minute Second</span>
        </div>
        <Buttons />
      </div>
    );
  }
}

export default timer;