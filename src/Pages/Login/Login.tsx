import React from "react";
import { PageComponent } from "../../Lib/PageComponent";
import { inject, observer } from "mobx-react";
import styles from "./Login.module.scss";
import { AuthStore } from "./AuthStore";

type props = {
    AuthStore: AuthStore;
}

@inject("AuthStore")
@observer
export class Login extends PageComponent<props> {
  render() {
    const { AuthStore } = this.injected;
    return (
      <div className={styles.AuthMenu}>
        <div className={styles.ContainerMenu}>
          <input type={"text"} onChange={e => AuthStore.changeUsername(e.target.value)}
            className={styles.text}/>
          <input type={"text"} onChange={e => AuthStore.changePassword(e.target.value)}
            className={styles.text}/>
          {/* eslint-disable-next-line @typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises */}
          <input type={"button"} onClick={AuthStore.auth}/>
        </div>
      </div>
    );
  }
}
