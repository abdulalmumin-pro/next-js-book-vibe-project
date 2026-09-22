"use client";

import { booksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import BookCard from "../components/homePage/BookCard";
import { Ibook } from "@/types/bookType";

const ListedPage = () => {
  const { readBook, wishList } = useContext(booksContext);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 px-6 py-12 shadow-sm sm:px-10 lg:px-14">
          {/* Decorative circles */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/30 blur-2xl" />
          <div className="absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-orange-200/30 blur-3xl" />

          <div className="relative z-10">
            <span className="mb-3 inline-flex items-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold text-amber-700 shadow-sm backdrop-blur">
              📚 My Library
            </span>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Listed Books
            </h1>

            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Keep track of the books you've finished and the ones waiting
              patiently on your reading list.
            </p>
          </div>
        </div>

        {/* selected card */}

        <div className="text-center pb-8">
          <select defaultValue="Color scheme" className="select select-accent">
            <option disabled={true}>Color scheme</option>
            <option value={"rating"}>Rating</option>
            <option value={"pages"}>Number of Pages</option>
            <option value={"year"}>Publisher Year</option>
          </select>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Books Read</p>
                <p className="mt-1 text-3xl font-black text-slate-900">
                  {readBook.length}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                ✓
              </div>
            </div>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Wishlist</p>
                <p className="mt-1 text-3xl font-black text-slate-900">
                  {wishList.length}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100 text-2xl">
                ♡
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="tabs tabs-boxed mb-2 w-full bg-slate-100 p-1">
            {/* Read Books */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab h-12 flex-1 text-sm font-bold sm:text-base"
              aria-label={`✓  Read Books (${readBook.length})`}
              defaultChecked
            />

            <div className="tab-content w-full border-0 bg-white p-4 sm:p-6 lg:p-8">
              {readBook.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {readBook.map((book: Ibook) => (
                    <BookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon="📖"
                  title="No books read yet"
                  description="Books you finish will appear here. Start reading and build your collection!"
                />
              )}
            </div>

            {/* Wishlist */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab h-12 flex-1 text-sm font-bold sm:text-base"
              aria-label={`♡  Wishlist (${wishList.length})`}
            />

            <div className="tab-content w-full border-0 bg-white p-4 sm:p-6 lg:p-8">
              {wishList.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {wishList.map((book: Ibook) => (
                    <BookCard key={book.bookId} book={book} />
                  ))}
                </div>
              ) : (
                <EmptyState
                  icon="♡"
                  title="Your wishlist is empty"
                  description="Found a book you love? Add it to your wishlist and come back to it later."
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmptyState = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 text-center">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default ListedPage;
