import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import store from "./store/store";
import App from "./components/app/App";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider {...store}>
    <App />
  </Provider>
);
