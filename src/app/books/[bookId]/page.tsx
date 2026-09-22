import DetailsBook from "@/app/components/DetailsBook";
import { Ibook } from "@/types/bookType";
import React from "react";

interface ParamsType {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return [];
  }
};

const BookId = async ({ params }: ParamsType) => {
  const { bookId } = await params;

  const booksData = await getBooks();

  const bookDetails = booksData.find(
    (book: Ibook) => String(book.bookId) === String(bookId)
  );

  console.log(bookDetails);

  return (
    <DetailsBook
      key={bookDetails.bookId}
      bookDetails={bookDetails}
    />
  );
};

export default BookId;