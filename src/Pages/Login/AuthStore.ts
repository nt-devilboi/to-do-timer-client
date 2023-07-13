import { action, makeObservable } from "mobx";
import { StatusResponse } from "../../Api/StatusResponse";
import { IResponse } from "../../Api/interfaces/IResponse";
import { StoreAdapterApi } from "../../Api/StoreAdapterApi";

interface RequestAuth {
    userName?: string,
    password?: string
}

export class AuthStore extends StoreAdapterApi {
  private AuthUser: RequestAuth = {};
  private Response: StatusResponse = StatusResponse.Wait;

  constructor() {
    super();
    makeObservable(this);
  }

    @action.bound
  async auth(): Promise<void> {
    const x = await this.TryAuth<RequestAuth>("/user/Login", this.AuthUser);
    this.Response = x.status;
    if (this.Response === StatusResponse.BadRequest) {
      // todo кароче прописать логику всех статусов
    }
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
