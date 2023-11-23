import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">movie icon</Link>
      <Link href="/contacts"> contacts icon</Link>
      <Link href="/account"> account icon</Link>
      <Link href="/"> undecided icon</Link>
    </nav>
  );
};
