import React, { Component } from "react";

export default class ClassEvents extends Component {
  // phương thức của class
  handleFocus = () => {
    // alert("đã focus rồi nha");
    console.log("đã focus rồi nha");
  };
  handleFocusParams = (message) => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <h2>ClassEvents</h2>
        <input type="text" placeholder="focus" onFocus={this.handleFocus} />
        <input
          type="text"
          placeholder="focus params"
          onFocus={() => this.handleFocusParams("Hello Hào!")}
        />
      </div>
    );
  }
}
