import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/books">Books</Link>
      </li>

      <li>
        <Link href="/listed-books">Listed Books</Link>
      </li>
      <li>
        <Link href="/page-read">Pages to Read</Link>
      </li>
    </>
  );

  return (
    <div className="navbar px-24 sticky top-0 z-30 bg-white shadow-2xl shadow-gray-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <button className="btn btn-success text-white">Sign in</button>
        <button className="btn btn-info text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
