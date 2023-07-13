import { StoreAdapterApi } from "../../../Api/StoreAdapterApi";
import { action, makeObservable, observable } from "mobx";
import { HttpRequest } from "../../../Api/HttpRequest";
import { IResponse } from "../../../Api/interfaces/IResponse";

interface Stats {
    stats: Date;
}

export class StatisticsStore extends StoreAdapterApi {
    @observable
      TotalTime?: Date;

    constructor() {
      super();
      makeObservable(this);
    }

    @action.bound
    async GetStatistics(bookId: string): Promise<void> {
      const resp = await this.getDataByToken<IResponse<Stats>>(HttpRequest.GetStats(bookId));
      this.TotalTime = resp.value?.stats;
    }
}
