import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Login } from "./Pages/Login/Login";
import { PagePaths } from "./Pages/PagePaths";
import { Board } from "./Pages/Board/Board";

function App() {
  return (
    <div>
      <Routes>
        <Route path={PagePaths.Login.main} element={<Login/>}/>
        <Route path={PagePaths.app.Board} element={<Board/>}/>
      </Routes>
    </div>
  );
}

export default App;
