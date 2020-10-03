import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /**
   * isLogin là thuộc tính của class
   *         true : đã đăng nhập => hiện tên người dùng
   *         false : chưa đăng nhập => hiện nút login
   */

  state = {
    isLogin: false,
  };

  //   isLogin = false;

  //   phương thức của class
  handleClick = () => {
    // this.isLogin = true;
    // console.log(this.isLogin);
    // this.state.isLogin = true;
    this.setState({
      isLogin: true,
    });
  };
  renderLogin = () => {
    // cách 1 dùng if elese
    if (this.state.isLogin) {
      return <p>Nguyễn Phong Hào</p>;
    } else {
      return <button onClick={this.handleClick}>Login</button>;
    }

    // cách 2 dùng toán tử 3 ngôi
    // điều kiện ? xử lý đúng : xử lý sai
    // return this.isLogin ? <p>Nguyễn Phong Hào</p> : <button>Login</ button>;
  };

  render() {
    console.log("run render");
    return (
      <div>
        <h2>Conditional And State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
