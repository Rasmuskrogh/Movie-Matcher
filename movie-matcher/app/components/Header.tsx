import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <Link href="/"> Logo & Title</Link>
      <Link href="/filters">Filters</Link>
    </nav>
  );
};

export default Header;
