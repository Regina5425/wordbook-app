import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import "./styles/index.scss";
import App from "./components/app/App";
import {rootStore} from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider {...rootStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
