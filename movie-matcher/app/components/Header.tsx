import React from "react";
import Link from "next/link";
import { PiPopcorn } from "react-icons/pi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

const Header = () => {
  return (
    <nav className="flex justify-between pt-6 pb-2">
      <div className="flex ml-1">
        <PiPopcorn size={24} />
        <h1>
          <b>M</b>ovie <b>m</b>atcher
        </h1>
      </div>
      <Link className="mr-2" href="/filters">
        <HiOutlineAdjustmentsHorizontal size={24} />
      </Link>
    </nav>
  );
};

export default Header;
