import { faker } from "@faker-js/faker";
import Book from "./types/Book";

const addBook = (books: Book[]): void => {
  books.push({
    title: faker.word.words({ count: { min: 1, max: 5 }}),
    author: faker.person.fullName(),
    publisher: faker.company.name(),
  })
};

export default addBook;
