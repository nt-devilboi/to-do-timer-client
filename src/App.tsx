import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Login } from "./Pages/Login/Login";
import { HttpPaths } from "./Pages/HttpPaths";
import { Board } from "./Pages/Board/Board";
import { PrivateRouter } from "./Components/PrivateRouter";
import { MenuView } from "./Pages/Menu/MenuView";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path={HttpPaths.Login.main} element={<Login/>}/>
          <Route path={HttpPaths.app.Loading} element={<PrivateRouter/>}>
            <Route path={HttpPaths.app.Board} element={<Board/>}/>
            <Route path={HttpPaths.app.Menu} element={<MenuView/>}/>
          </Route>
        </Routes>
      </div>
    );
  }
}
