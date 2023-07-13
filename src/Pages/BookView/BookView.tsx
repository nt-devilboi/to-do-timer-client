import { PageComponent } from "../../Lib/PageComponent";
import { RouterParams, useParamsInClass } from "../../Hoc/WithParams";
import React from "react";
import { inject, observer } from "mobx-react";
import { BookStore } from "./Store/BookStore";
import { Button, Dropdown, Select } from "semantic-ui-react";
import { StatisticsStore } from "./Store/StatisticsStore";

interface props { // уххх здесь очень тяжкая логика ухххххх. главное такое не забыть)))
    id: number
    params: RouterParams
    bookStore: BookStore
    statisticsStore: StatisticsStore
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
@useParamsInClass
@inject("bookStore", "statisticsStore")
@observer
class BookView extends PageComponent<props> {
  async componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
    await this.injected.bookStore.LoadBook(this.props.params.id);
    await this.injected.bookStore.LoadStatuses();
  }

  render() {
    const { bookStore, statisticsStore } = this.injected;
    return (
      <div>
        <p>Страничка книги</p>
        <p>{bookStore.book !== undefined && bookStore.book.name}</p>
        <Dropdown text={"Статус"} inline={true}>
          <Dropdown.Menu>
            {bookStore.statues !== undefined && bookStore.statues.map((s: Status) => <Dropdown.Item
              onClick={() => bookStore.changeSelectStatus(s)} key={s.id}
              text={s.name}/>)}
          </Dropdown.Menu>
        </Dropdown>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises,@typescript-eslint/unbound-method */}
        <Button onClick={bookStore.startEvent}> Начать </Button>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/unbound-method,@typescript-eslint/no-misused-promises */}
        <Button onClick={bookStore.endWork}> закончить </Button>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Button onClick={() => statisticsStore.GetStatistics(bookStore.book!.id)}> Показать статистику за
                    сегодня </Button>

        {statisticsStore.TotalTime !== undefined && <p>{statisticsStore.TotalTime.toLocaleString()}</p>}
      </div>
    );
  }
}

export default BookView;
