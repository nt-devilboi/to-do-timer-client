import { Book } from "../../Menu/Model/Book";

interface Event {
    id: string;
    book: Book;
    status: Status;
    start: Date;
}
