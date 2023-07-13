import { PageComponent } from "../../Lib/PageComponent";
import { BooksStore } from "./BooksStore";
import { inject, observer } from "mobx-react";
import { SegmentBookView } from "./Components/SegmentBookView/SegmentBookView";

interface props {
    booksStore: BooksStore
}

@inject("booksStore")
@observer
export class MenuView extends PageComponent<props> {
  async componentDidMount() {
    console.log("Test");
    await this.injected.booksStore.LoadBooks();
  }

  render() {
    const { booksStore } = this.injected;
    console.log("вьюшка");
    return (
      <div>
        {booksStore.books != null && booksStore.books.map(b => <SegmentBookView book={b}/>)}
      </div>
    );
  }
}
