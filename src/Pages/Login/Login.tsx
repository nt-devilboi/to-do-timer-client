import React from "react";
import { PageComponent } from "../../Lib/PageComponent";
import { inject, observer } from "mobx-react";
import styles from "./Login.module.scss";
import { AuthStore } from "./AuthStore";

type props = {
    authStore: AuthStore;
}

@inject("authStore")
@observer
export class Login extends PageComponent<props> {
  render() {
    const { authStore } = this.injected;
    return (
      <div className={styles.AuthMenu}>
        <div className={styles.ContainerMenu}>
          <input type={"text"} onChange={e => authStore.changeUsername(e.target.value)}
            className={styles.text}/>
          <input type={"text"} onChange={e => authStore.changePassword(e.target.value)}
            className={styles.text}/>
          {/* eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises */}
          <input type={"button"} onClick={authStore.auth}/>
        </div>
      </div>
    );
  }
}
