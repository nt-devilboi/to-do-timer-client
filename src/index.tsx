import * as React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { AuthStore } from "./Pages/Login/AuthStore";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const stores = {
  AuthStore: new AuthStore()
};

root.render(
  <React.StrictMode>
    <Provider {...stores}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
