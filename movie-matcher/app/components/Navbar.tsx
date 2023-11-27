import React from "react";
import Link from "next/link";
import { PiPopcorn } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { FaUserFriends } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";

export const Navbar = () => {
  return (
    <nav className="flex border-solid border-red-600 border-2 justify-between px-3">
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/">
        <PiPopcorn size={25} />
      </Link>
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/contacts">
        <FaUserFriends size={25} className="ml-5" />
      </Link>
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/">
        <LuSearch size={25} className="ml-9" />
      </Link>
      <Link className="w-1/4 pt-4 pb-3.5 text-center " href="/account">
        <VscAccount size={25} className="ml-14" />
      </Link>
    </nav>
  );
};
