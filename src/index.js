import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import App from "./components/App";

import "./index.css";

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById("root"));
};

render(hot(App));
