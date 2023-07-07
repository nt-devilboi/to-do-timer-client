import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Login } from "./Pages/Login/Login";
import { PagePaths } from "./Pages/PagePaths";

function App() {
  return (
    <div>
      <Routes>
        <Route path={PagePaths.Login.main} element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
