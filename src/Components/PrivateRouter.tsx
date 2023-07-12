import { inject } from "mobx-react";
import { UserStore } from "../Pages/Board/UserStore";
import { Navigate, Outlet } from "react-router";
import React from "react";
import { HttpPaths } from "../Pages/HttpPaths";
import { ClockLoader } from "react-spinners";
import { PageComponent } from "../Lib/PageComponent";

interface props {
    userStore: UserStore
}

@inject("userStore")
export class PrivateRouter extends PageComponent<props> {
  async componentDidMount() {
    await this.injected.userStore.AuthByToken();
  }

  render() {
    if (this.injected.userStore.User === null) {
      return <Navigate to={HttpPaths.Login.main}/>;
    }

    return (
      <div>
        <Outlet/>
      </div>
    );
  }
}
