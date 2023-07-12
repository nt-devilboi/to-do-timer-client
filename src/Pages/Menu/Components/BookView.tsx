import React from "react";
import { Book } from "../Model/Book";
import "semantic-ui-css/semantic.min.css";
import { Header, Segment } from "semantic-ui-react";

interface props {
    book: Book
}

export class BookView extends React.Component<props> {
  render() {
    const { book } = this.props;
    return (
      <Segment>
        <Header as="h3">{book.name}</Header>
        <p>{book.desc}</p>
      </Segment>
    );
  }
}
