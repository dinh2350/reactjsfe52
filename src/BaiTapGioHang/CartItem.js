import React, { Component } from "react";

class CartItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.cart.maSanPham}</td>
        <td>{this.props.tenSanPham}</td>
        <td>
          <img src={this.props.cart.hinhAnh} width={50} alt />
        </td>
        <td>
          <button>-</button>
          {this.props.cart.soLuong}
          <button>+</button>
        </td>
        <td>{this.props.cart.giaBan}</td>
        <td>{this.props.cart.giaBan * this.props.cart.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              const cartDuocNhan = this.props.cart;
              this.props.handleDelete(cartDuocNhan);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
