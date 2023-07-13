import React from "react";
import { Book } from "../../Model/Book";
import "semantic-ui-css/semantic.min.css";
import { Button, Header, Segment } from "semantic-ui-react";
import styles from "./SegmentBookView.module.scss";
import { Link } from "react-router-dom";

interface props {
    book: Book
}

export class SegmentBookView extends React.Component<props> {
  render() {
    const { book } = this.props;
    return (
      <div className={styles.BookContainer}>
        <Segment className={styles.segment}>
          <Header as="h3">{book.name} </Header>
          <p>{book.desc}</p>
          <Link to={"book/" + book.id} className={styles.link}>
            <Button>открыть</Button>
          </Link>
        </Segment>
      </div>

    );
  }
}
