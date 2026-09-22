"use client";
import { booksContext } from "@/context/BooksContext";
import React, { useContext } from "react";

const ListedPage = () => {
    const {readBook, wishList} = useContext(booksContext)
    console.log(readBook, wishList);

  return (
    <div>
      <p>listed page</p>
    </div>
  );
};

export default ListedPage;
