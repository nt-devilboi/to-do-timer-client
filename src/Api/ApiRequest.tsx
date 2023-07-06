import axios, { type AxiosError, type AxiosResponse } from "axios";

export interface WithError<T> {
    data: T
    status: number
}

export default abstract class ApiRequest { // еще один абстрк ради абстракт, как мне кажется, но убрать это 10 сек
  protected async GetByToken<T> (url: string, token: string): Promise<AxiosResponse<T>> {
    return await axios.get<T>(url, { headers: { Authorization: `token ${token}` } });
  }
}
