import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex border-solid border-red-600 border-2 justify-between px-3">
      <Link
        className="pt-4 pb-3.5 order-solid border-green-600 border-2 w-1/4 text-center"
        href="/"
      >
        X
      </Link>
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/contacts">
        X
      </Link>
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/">
        X
      </Link>
      <Link className="w-1/4 pt-4 pb-3.5 text-center " href="/account">
        X
      </Link>
    </nav>
  );
};
