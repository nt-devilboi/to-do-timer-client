import React from "react";
import { type ILocalStore } from "./interfaces/ILocalStore";
import { LocalStoreEntity } from "./LocalStoreEntity";
import { IResponse } from "./interfaces/IResponse";
import ApiClient, { ResponseData } from "./ApiClient";

export abstract class StoreAdapterApi {
  private readonly _api: ApiClient = new ApiClient();
  private readonly _token: ILocalStore = new LocalStoreEntity("Bearer");

  protected async getDataByToken<T>(url: string): Promise<T> {
    return await this._api.getByToken<T>(this._token.get, url); // вроде как выглядит неплохо, если так сделать то куча логике не нужно будет повторять в каждом store
  }

  protected async TryAuth<TPost>(url: string, data: TPost): Promise<ResponseData<IResponse<IToken>>> {
    const resp = await this._api.post<IResponse<IToken>, TPost>(url, data);
    if (resp.data.value === null) { // можно реализовать отдельный класс или метод, который проверяет всю эту штуку, тогда это будет отдельно от этого класса
      console.log(resp.data.error);
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._token.set(resp.data.value.token);
    }

    return resp;
  }

  protected async postWithoutToken<TGet, TPost>(url: string, data: TPost): Promise<ResponseData<TGet>> {
    return await this._api.post<TGet, TPost>(url, data);
  }

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
