import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between h-70px pt-6 pb-2 border-solid border-2 border-black">
      <Link className="ml-2" href="/">
        Logo & Title
      </Link>
      <Link className="mr-2" href="/filters">
        Filters
      </Link>
    </nav>
  );
};

export default Header;
