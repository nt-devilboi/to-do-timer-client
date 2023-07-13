import { action, makeObservable, observable } from "mobx";
import { IResponse } from "../../Api/interfaces/IResponse";
import { StoreAdapterApi } from "../../Api/StoreAdapterApi";

export interface IUser {
    UserName: string,
}

export class UserStore extends StoreAdapterApi {
    @observable
  public User?: IUser;

    public loading = true;

    constructor() {
      super();
      makeObservable(this);
    }

    @action
    async AuthByToken() {
      const user = await this.getDataByToken<IResponse<IUser>>("/user");
      this.User = user.value; // пока все максимально тупо
      this.loading = false;
    }

    @action
    public LoadIsComplete() { // todo Сделать загрузку сайта
      this.loading = false;
    }
}
