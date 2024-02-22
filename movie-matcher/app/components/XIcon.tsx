"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

const XIcon = () => {
  const buttonClicked = () => {
    console.log("X clicked");
  };

  return (
    <button className="ml-[16%] absolute z-10" onClick={buttonClicked}>
      <IoClose
        size={50}
        className="bg-black rounded-full z-2 fill-white mb-4"
      />
    </button>
  );
};

export default XIcon;
