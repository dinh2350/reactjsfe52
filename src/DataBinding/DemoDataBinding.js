import React, { Component } from "react";

export default class DemoDataBinding extends Component {
  // thuộc tính của class
  ten = "Nguyễn Phong Hào";
  lop = 52;
  // phương thức của class
  renderName = () => {
    return <p>tên : {this.ten} </p>;
  };

  render() {
    //   biến của phương thức render
    const hinhAnh =
      "https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png";
    return (
      <div>
        <h2>DataBinding</h2>
        {/* <p>tên : {this.ten} </p> */}
        {this.renderName()}
        <p>lớp : {this.lop}</p>
        <img src={hinhAnh} alt="hinh anh" />
      </div>
    );
  }
}
