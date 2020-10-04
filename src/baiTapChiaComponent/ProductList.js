import React, { Component } from "react";
import Product from "./Product";
export default class ProductList extends Component {
  productList = [
    {
      hinhAnh: "./img/sp_note7.png",
      tenSP: "Note 7",
      moTa:
        "Note 7 features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      hinhAnh: "./img/sp_iphoneX.png",
      tenSP: "IPhone X",
      moTa:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      hinhAnh: "./img/sp_blackberry.png",
      tenSP: "Blackberry",
      moTa:
        "Blackberry features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      hinhAnh: "./img/sp_vivo850.png",
      tenSP: "Vivo 850",
      moTa:
        "Vivo 850 features a new all-screen design. Face ID, which makes your face your password",
    },
  ];

  renderProductList = () => {
    return this.productList.map((product, index) => {
      return (
        <div
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
          key={index}
        >
          <Product sanPham={product} />
        </div>
      );
    });
  };

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">{this.renderProductList()}</div>
      </section>
    );
  }
}
