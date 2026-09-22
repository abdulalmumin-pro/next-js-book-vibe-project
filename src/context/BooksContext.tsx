"use client";
import { createContext, ReactNode, useState } from 'react';

export const booksContext = createContext({})

const BooksProvider = ( {children}: {children: ReactNode} ) => {

    const [readBook, setReadBook] = useState([])
    const [wishList, setWishList] = useState([])

    const shareData = {
        readBook,
        setReadBook,
        wishList,
        setWishList
    }

    return (
        <booksContext.Provider value={shareData}>{children}</booksContext.Provider>
        
    );
};

export default BooksProvider;