import React from "react";
import { type ILocalStore } from "./ILocalStore";
import ApiClient, { type ResponseData } from "./ApiClient";
import { LocalStoreEntity } from "./LocalStoreEntity";

// todo здесь явно нужен рефакторинг

enum ConfigRequest {
    UseToken,
    NotUseToken
}

abstract class StoreAdapterApi {
  private readonly _api: ApiClient = new ApiClient();
  private readonly _token: ILocalStore = new LocalStoreEntity("bearer");

  protected async getDataByToken<T>(url: string): Promise<T> {
    return await this._api.getByToken<T>(this._token.get, url); // вроде как выглядит неплохо, если так сделать то куча логике не нужно будет повторять в каждом store
  }

  protected async postWithoutToken<TGet, TPost>(url: string, data: TPost): Promise<ResponseData<TGet>> {
    return await this._api.post<TGet, TPost>(url, data);
  }

  // todo вроде как эти два одинаковые, один с токеном другой без
  protected async postByToken<TGet, TPost>(url: string, data: TPost): Promise<ResponseData<TGet>> {
    return await this._api.post(url, data, this._token.get);
  }

  protected async patchByToken<TGet, TPost>(url: string, data: TPost): Promise<ResponseData<TGet>> {
    return await this._api.patch(url, this._token.get, data);
  }

  protected async DownloadFile<TPost>(url: string, data: TPost): Promise<void> {
    await this._api.DownLoadFile<TPost>(this._token.get, url, data);
  }
}

export default StoreAdapterApi;
