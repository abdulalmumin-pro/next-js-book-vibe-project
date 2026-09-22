import { Ibook } from '@/types/bookType';
import Image from 'next/image';
import React from 'react';
import ReadBook from './bookDetails/ReadBook';
import WishListBook from './bookDetails/WishListBook';

interface IbookDetail {
  bookDetails: Ibook;
}

const DetailsBook = ({ bookDetails }: IbookDetail) => {
  return (
    <section className="min-h-screen bg-base-200 px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
          <div className="grid lg:grid-cols-[380px_1fr]">
            
            {/* Book Cover */}
            <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 p-8 md:p-12">
              <div className="relative w-full max-w-[280px]">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-primary/20 blur-2xl" />

                <Image
                  src={bookDetails.image}
                  alt={bookDetails.bookName}
                  width={400}
                  height={600}
                  className="relative aspect-[2/3] w-full rounded-2xl object-cover shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Book Information */}
            <div className="flex flex-col p-6 md:p-10 lg:p-12">
              
              {/* Category */}
              <div className="mb-4">
                <span className="badge badge-primary badge-outline px-4 py-3 text-sm font-medium">
                  {bookDetails.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {bookDetails.bookName}
              </h1>

              {/* Author */}
              <p className="mt-3 text-lg text-base-content/60">
                by{' '}
                <span className="font-semibold text-base-content">
                  {bookDetails.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 rounded-full bg-warning/10 px-4 py-2">
                  <span className="text-xl">★</span>
                  <span className="font-bold">{bookDetails.rating}</span>
                  <span className="text-sm text-base-content/50">
                    / 5.0
                  </span>
                </div>

                <span className="text-sm text-base-content/50">
                  {bookDetails.totalPages} pages
                </span>

                <span className="text-sm text-base-content/50">
                  Published {bookDetails.yearOfPublishing}
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px bg-base-300" />

              {/* Description */}
              <div>
                <h2 className="mb-3 text-xl font-bold">About this book</h2>

                <p className="text-base leading-7 text-base-content/70">
                  {bookDetails.review}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-7">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-base-content/50">
                  Genres
                </h3>

                <div className="flex flex-wrap gap-2">
                  {bookDetails.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-base-200 px-4 py-2 text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Book Metadata */}
              <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-base-200 p-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-wide text-base-content/50">
                    Publisher
                  </p>
                  <p className="mt-1 font-semibold">
                    {bookDetails.publisher}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-base-content/50">
                    Published
                  </p>
                  <p className="mt-1 font-semibold">
                    {bookDetails.yearOfPublishing}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wide text-base-content/50">
                    Pages
                  </p>
                  <p className="mt-1 font-semibold">
                    {bookDetails.totalPages}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                
                <ReadBook key={bookDetails.bookId} bookDetails={bookDetails}></ReadBook>

                <WishListBook key={bookDetails.bookId} bookDetails={bookDetails}></WishListBook>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote / Highlight */}
        <div className="mt-6 rounded-2xl border border-base-300 bg-base-100 p-6 text-center shadow-sm md:p-8">
          <p className="text-lg font-medium italic text-base-content/70">
            “A timeless story of ambition, love, wealth, and the American Dream.”
          </p>

          <p className="mt-2 text-sm text-base-content/40">
            — {bookDetails.bookName}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailsBook;