import StoreAdapterApi from "../../Api/StoreAdapterApi";
import { action, makeObservable, observable } from "mobx";

interface RequestAuth {
    userName?: string,
    password?: string
}

export class AuthStore extends StoreAdapterApi {
  private AuthUser: RequestAuth = {};

  constructor() {
    super();
    makeObservable(this);
  }

    @action.bound
  async auth(): Promise<void> {
    await this.postWithoutToken("/user/Login", this.AuthUser);
  }

    @action.bound
    changeUsername(userName: string): void {
      this.AuthUser.userName = userName;
    }

    @action.bound
    changePassword(password: string): void {
      this.AuthUser.password = password;
    }
}
