"use client";
import { booksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/bookType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadBook = ( {bookDetails}: {bookDetails: Ibook} ) => {
  const {readBook, setReadBook} = useContext(booksContext);


  const handleBookRead = ()=> {
      // console.log("bookDetails =>", bookDetails);
      setReadBook([...readBook, bookDetails]);
      toast.success(`you have read" ${bookDetails.bookName}`)

    }
  return (
    <div>
      <button className="btn btn-primary flex-1 rounded-xl"
      onClick={()=> handleBookRead()}>
        📖 Start Reading
      </button>
    </div>
  );
};

export default ReadBook;
