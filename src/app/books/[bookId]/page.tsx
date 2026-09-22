import DetailsBook from "@/app/components/DetailsBook";
import { Ibook } from "@/types/bookType";
import React from "react";

interface ParamsType {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const BookId = async ({ params }: ParamsType) => {
  const { bookId } = await params;
//   console.log(bookId);

  const booksData = await getBooks();
  const bookDetails = booksData.find((book: Ibook) => String(book.bookId) === String(bookId))
  console.log(bookDetails);

  return (
    <DetailsBook key={bookDetails.bookId} bookDetails={bookDetails}></DetailsBook>
  );
};

export default BookId;



