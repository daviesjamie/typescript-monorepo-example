import addBook from "@monorepo/logic/addBook";
import books from "@monorepo/logic/books";
import express from "express";
import BookResponse from "./interfaces/BookResponse";
import MessageResponse from "./interfaces/MessageResponse";

const router = express.Router();
const currentBooks = books;

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋",
  });
});

router.get<{}, BookResponse>("/books", (req, res) => {
  res.json({
    books: currentBooks,
  });
});

router.get<{}, MessageResponse>("/books/add", (req, res) => {
  addBook(currentBooks);
  res.json({
    message: "Added book!",
  });
});

export default router;
