import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";
import Home from "./baiTapChiaComponent/Home";
function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFull /> */}
      <Home />
    </div>
  );
}

export default App;
