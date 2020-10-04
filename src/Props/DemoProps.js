import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  type = "Husky";
  image =
    "https://salt.tikicdn.com/cache/w390/ts/product/86/78/8f/f9d522cd6f286908d59c22d982791aff.jpg";

  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* props dùng để truyền dử liệu giửa các component */}

        {/* cách truyền data liệu */}
        <FunctionProps loaiCho={this.type} hinhAnh={this.image} />
        <ClassProps typeDog={this.type} imgHusky={this.image} />
      </div>
    );
  }
}
