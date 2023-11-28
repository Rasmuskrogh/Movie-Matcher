import React from "react";
import Link from "next/link";
import { PiPopcorn } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineMovie } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/">
        <PiPopcorn size={25} className="ml-[10%]" />
      </Link>
      <Link className="pt-4 pb-3.5 w-1/4 text-center" href="/contacts">
        <FaUserFriends size={25} className="ml-[25%]" />
      </Link>
      <Link className="pt-4 pb-3.5 w-1/4" href="/movies">
        <MdOutlineMovie size={25} className="ml-[45%]" />
      </Link>
      <Link className="w-1/4 pt-4 pb-3.5 text-center " href="/account">
        <VscAccount size={25} className="ml-[60%]" />
      </Link>
    </nav>
  );
};
