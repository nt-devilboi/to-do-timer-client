import { Book } from "../../Menu/Model/Book";
import { StoreAdapterApi } from "../../../Api/StoreAdapterApi";
import { HttpRequest } from "../../../Api/HttpRequest";
import { IResponse } from "../../../Api/interfaces/IResponse";
import { action, makeObservable, observable } from "mobx";

interface IEventStart {
    bookId: string,
    statusId: string
}

export class BookStore extends StoreAdapterApi {
    @observable
      book?: Book;

    @observable
      statues?: Status[] = [];

    @observable
      SelectedStatus?: Status;

    @observable
      Events: Event[] = [];

    constructor() {
      super();
      makeObservable(this);
    }

    @action
    async LoadBook(id: string) {
      console.log(id);
      const resp = await this.getDataByToken<IResponse<Book>>(HttpRequest.GetBookById(id));
      this.book = resp.value;
      console.log(this.book);
    }

    @action
    async LoadStatuses() {
      const resp = await this.getDataByToken<IResponse<Status[]>>(HttpRequest.GetStatuses);

      this.statues = resp.value;
    }

    @action
    changeSelectStatus(status: Status): void {
      this.SelectedStatus = status;
    }

    @action.bound
    async startEvent() {
      if (this.book === undefined || this.SelectedStatus === undefined) {
        // бла бла тест
      } else {
        const eventInfo: IEventStart = { bookId: this.book.id, statusId: this.SelectedStatus.id };
        const resp = await this.postByToken<any, IEventStart>(HttpRequest.StartEvent, eventInfo); // todo здесь доделать
      }
    }

    @action.bound
    async endWork() {
      if (this.book === undefined || this.SelectedStatus === undefined) {
        // бла бла тест
      } else {
        const resp = await this.postByToken<any, {
                bookId: string
            }>(HttpRequest.EndWork, { bookId: this.book.id }); // todo здесь доделать
      }
    }
}
