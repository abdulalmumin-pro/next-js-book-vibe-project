
import React from "react";
import { Ibook } from "@/types/bookType";
import BookCard from "../components/homePage/BookCard";


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

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="mx-24 my-16">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Explore Our Collection
        </p>

        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Featured Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover timeless classics and exciting stories for your next reading
          adventure.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book: Ibook, ind:number) => {
          return <BookCard key={ind} book={book}></BookCard>;
        })}
      </div>
    </section>
  );
};

export default Books;
