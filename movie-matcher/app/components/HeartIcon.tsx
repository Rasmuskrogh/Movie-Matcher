"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { posters } from "../actions";

const HeartIcon = () => {
  const buttonClicked = () => {
    console.log("<3 clicked");
  };

  return (
    <button className="z-10 ml-[70%]" onClick={buttonClicked}>
      <FaHeart
        size={50}
        className="p-2 bg-black rounded-full fill-white mb-4"
      />
    </button>
  );
};

export default HeartIcon;
