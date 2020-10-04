/**
 * các bước thực hiện :
 * 1. dàn layout ( html css ) - done
 * 2. xác định data thay đổi và lưu vào state - done
 * 3. lấy data trong state đi binding ra jsx - done
 * 4. render mãng dử liệu
 * 5. xây dựng chức năng xem chi tiết
 * 6. xây dựng chức năng thêm giỏ hàng
 * 7. xây dựng chức năng xóa sp khoải giỏ hàng
 * 8. xây dựng chức năng tăng giảm số lượng
 * 9. xây dựng chức năng hiển thị tông số sản phẩm
 */

import React, { Component } from "react";
import SanPham from "./SanPham";

export default class BaiTapGioHang extends Component {
  danhSachSanPham = [
    {
      maSanPham: "1",
      tenSanPham: "VS Phone",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    {
      maSanPham: "2",
      tenSanPham: "Meizu phone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "25 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "8 GB",
      rom: "16 GB",
    },
    {
      maSanPham: "3",
      tenSanPham: "Apple phone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "IOS",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "64 GB",
      rom: "86 GB",
    },
  ];

  state = {
    sanPhamChiTiet: {
      maSanPham: "1",
      tenSanPham: "",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
  };

  renderDanhSachSanPham = () => {
    return this.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham sanPham={sanPham} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng (5)
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            <div
              className="modal fade"
              id="modelId"
              tabIndex={-1}
              aria-labelledby="modelTitleId"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <div
                className="modal-dialog"
                role="document"
                style={{ maxWidth: 1000 }}
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Giỏ hàng</h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Mã sản phẩm</th>
                          <th>tên sản phẩm</th>
                          <th>hình ảnh</th>
                          <th>số lượng</th>
                          <th>đơn giá</th>
                          <th>thành tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Iphone XS Max</td>
                          <td>
                            <img src="./img/applephone.jpg" width={50} alt />
                          </td>
                          <td>
                            <button>-</button>5<button>+</button>
                          </td>
                          <td>27000000</td>
                          <td>135000000</td>
                          <td>
                            <button className="btn btn-danger">Delete</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.state.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.state.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.state.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.state.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.state.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.state.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
