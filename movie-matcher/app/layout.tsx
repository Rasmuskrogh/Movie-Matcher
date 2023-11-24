import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//components
import { Navbar } from "./components/Navbar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
