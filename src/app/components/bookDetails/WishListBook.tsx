"use client";
import { booksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/bookType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListBook = ( {bookDetails}: {bookDetails: Ibook} ) => {
  const {wishList, setWishList} = useContext(booksContext);


  const handleBookRead = ()=> {
      // console.log("bookDetails =>", bookDetails);
      setWishList([...wishList, bookDetails]);
      toast.success(`you have added ${bookDetails.bookName}`)

    }
  return (
    <div>
      <button className="btn btn-outline rounded-xl px-6"
      onClick={()=> handleBookRead()}>
        ♡ Add to Wishlist
      </button>
    </div>
  );
};

export default WishListBook;
