"use client";
import { Ibook } from '@/types/bookType';
import { createContext, ReactNode, useState } from 'react';
interface IbookContext {
    readBook: Ibook[],
    setReadBook: React.Dispatch<React.SetStateAction<Ibook[]>>,
    wishList: Ibook[],
    setWishList:React.Dispatch<React.SetStateAction<Ibook[]>>
}

export const booksContext = createContext<IbookContext>({
    readBook: [],
    setReadBook: () => {},
    wishList: [],
    setWishList: () => {},
});

const BooksProvider = ( {children}: {children: ReactNode} ) => {

    const [readBook, setReadBook] = useState<Ibook[]>([])
    const [wishList, setWishList] = useState<Ibook[]>([])

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