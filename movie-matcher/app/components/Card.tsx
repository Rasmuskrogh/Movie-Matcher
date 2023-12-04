import React from "react";
import HeartIcon from "./HeartIcon";
import XIcon from "./XIcon";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div
        className="m-1 w-98% h-[550px] rounded relative"
        style={{ backgroundImage: `url('/notebookPoster.pgn')` }}
      >
        <div className="flex flex-row items-end h-full pb-6">
          <XIcon />
          <HeartIcon />
          <Image
            src="/notebookPoster.jpg"
            alt="poster image"
            fill
            className="rounded"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
