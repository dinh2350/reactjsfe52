import React from "react";

// cách nhận dử liệu từ props

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>Function Props</h3>
      <p>type : {props.loaiCho} </p>
      <img src={props.hinhAnh} alt="hình đẹp" />
    </div>
  );
}
