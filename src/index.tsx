import * as React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import { BrowserRouter } from "react-router-dom";
import { AuthStore } from "./Pages/Login/AuthStore";
import { UserStore } from "./Pages/Board/UserStore";
import { App } from "./App";
import { BooksStore } from "./Pages/Menu/BooksStore";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const stores = {
  authStore: new AuthStore(),
  userStore: new UserStore(),
  booksStore: new BooksStore()
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
