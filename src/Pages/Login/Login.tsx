import React from "react";
import { PageComponent } from "../../Lib/PageComponent";
import { inject, observer } from "mobx-react";
import styles from "./Login.module.scss";
import { AuthStore } from "./AuthStore";
import { UserStore } from "../Board/UserStore";
import { Navigate } from "react-router";
import { HttpPaths } from "../HttpPaths";

type props = {
    authStore: AuthStore;
    userStore: UserStore;
}

@inject("authStore", "userStore")
@observer
export class Login extends PageComponent<props> {
  async componentDidMount() {
    await this.injected.userStore.AuthByToken();
  }

  async EnterOnAccount() {
    await this.injected.authStore.auth();
    await this.injected.userStore.AuthByToken();
  }

  render() {
    const { authStore, userStore } = this.injected;
    if (userStore.User !== undefined) {
      return <Navigate to={HttpPaths.app.main + "/" + HttpPaths.app.Menu}/>;
    }
    return (
      <div className={styles.AuthMenu}>
        <div className={styles.ContainerMenu}>
          <input type={"text"} onChange={e => authStore.changeUsername(e.target.value)}
            className={styles.text}/>
          <input type={"text"} onChange={e => authStore.changePassword(e.target.value)}
            className={styles.text}/>
          {/* eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises */}
          <input type={"button"} onClick={() => this.EnterOnAccount()}/>
        </div>
      </div>
    );
  }
}
