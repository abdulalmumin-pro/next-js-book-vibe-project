import { Ibook } from "@/types/bookType";
import Image from "next/image";
import React from "react";

interface IbookCard {
    book: Ibook
}

const BookCard = ( {book}: IbookCard ) => {
  return (
    <div
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-100"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-700 shadow backdrop-blur-sm">
            {book.category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-4">
          <span className="flex items-center gap-1 rounded-full bg-gray-900/80 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            <span className="text-yellow-400">★</span>
            {book.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Book Name */}
        <h3 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-600">
          {book.bookName}
        </h3>

        {/* Author */}
        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="my-5 h-px bg-gray-100"></div>

        {/* Book Information */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div>
            <p className="text-xs text-gray-400">Pages</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.totalPages}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Published</p>
            <p className="mt-1 font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">Publisher</p>
            <p className="mt-1 max-w-[80px] truncate font-semibold text-gray-800">
              {book.publisher}
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="btn mt-6 w-full rounded-xl border-0 bg-emerald-600 text-white shadow-md shadow-emerald-100 transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default BookCard;
