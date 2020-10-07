import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./components/simpleHabit";
ReactDOM.render(<SimpleHabit />, document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
//'root' id 요소에 App컴포넌트를 연결
