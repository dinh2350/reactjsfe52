import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
          <button className="btn btn-success">Chi tiết</button>
          <button className="btn btn-danger">Thêm giỏ hàng</button>
        </div>
      </div>
    );
  }
}
