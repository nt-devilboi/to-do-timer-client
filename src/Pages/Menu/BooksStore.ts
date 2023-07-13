import { Book } from "./Model/Book";
import { StoreAdapterApi } from "../../Api/StoreAdapterApi";
import { IResponse } from "../../Api/interfaces/IResponse";
import { action, makeObservable, observable } from "mobx";

export class BooksStore extends StoreAdapterApi {
    @observable
  public books: Book[] = [];

    constructor() {
      super();
      makeObservable(this);
    }

    @action
    async LoadBooks() {
      console.log("Запущен");
      const response = await this.getDataByToken<IResponse<Book[]>>("/books");
      if (response.error != null) {
        console.log(response.error);
      } else if (response.value !== undefined) {
        this.books = response.value;
      }
    }
}
