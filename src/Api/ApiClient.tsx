import axios, { type AxiosError } from "axios";
import ApiRequest from "./ApiRequest";

// концепия интересная, но пока не могу сказать, не мусорный ли это просто код
export interface ResponseData<T> {
    data: T
    status: number
}

// TODO ужас здесь повторяется код!!! catch then убрать определённо
class ApiClient extends ApiRequest {
  private axios = axios.create();

  public async post<TGet, TPost>(url: string, dataPost: TPost, token?: string): Promise<ResponseData<TGet>> {
    this.axios.defaults.headers.common.Authorization = token;
    try {
      const resp = await this.axios.post<TGet>(url, dataPost);
      return { data: resp.data, status: resp.status };
    } catch (err) {
      const error = err as AxiosError<TGet, any>;
      console.log(error.response, "запрос с ошибкой");
      return { data: error.response!.data, status: error.response!.status };
    }
  }

  public async patch<TGet, TPost>(url: string, token: string, dataPost: TPost): Promise<ResponseData<TGet>> { // todo убери токен в правую часть аргуменутом плз!!!
    try {
      const resp = await axios.patch<TGet>(url, dataPost, { headers: { Authorization: `token ${token}` } });
      return { data: resp.data, status: resp.status };
    } catch (err) {
      const error = err as AxiosError<TGet, any>;
      console.log(error.response, "запрос с ошибкой");
      return { data: error.response!.data, status: error.response!.status };
    }
  }

  // TODo переделеать, в более универальный случай
  public async getByToken<TGet>(token: string, url: string): Promise<TGet> { // как идея, можно выкинуть этоткод за абстрак класс, и брать его для всех методов здесь, тогда повторов не будет
    try {
      const response = await this.GetByToken<TGet>(url, token);
      return response.data;
    } catch (err) {
      const e = err as AxiosError<TGet, any>;
      console.log("запрос с ошибкой", e.response);
      return e.response!.data;
    }
  }

  // пока максимально тупо я на прямую
  public async DownLoadFile<TPost>(token: string, url: string, data: TPost): Promise<void> {
    await axios.post(url, data, {
      responseType: "blob",
      headers: { Authorization: `token ${token}` }// important
    }).then((response) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", "file.pdf"); // or any other extension
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  }
}

export default ApiClient;
