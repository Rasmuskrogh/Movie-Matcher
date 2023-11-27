import React from "react";
import HeartIcon from "./HeartIcon";
import XIcon from "./XIcon";

const Card = () => {
  return (
    <>
      <div className="m-1 border-solid border-orange-600 border-2 w-98% h-96 rounded relative">
        <div className="flex flex-row justify-between items-end h-full">
          <XIcon />
          <HeartIcon />
        </div>
      </div>
    </>
  );
};

export default Card;
