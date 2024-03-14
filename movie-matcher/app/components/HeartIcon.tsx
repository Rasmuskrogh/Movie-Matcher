"use client";
import React from "react";
import { FaHeart } from "react-icons/fa";

interface Props {
  poster: string;
  title: string;
  year: number;
  runtime: string;
  genre: string;
  plot: string;
  director: string;
  movieActors: string;
  writer: string;
  imdbRating: string;
  rottenTomatoesRating: number;
  metaCriticRating: number;
}

const HeartIcon = ({
  poster,
  title,
  year,
  runtime,
  genre,
  plot,
  director,
  movieActors,
  writer,
  imdbRating,
  rottenTomatoesRating,
  metaCriticRating,
}: Props) => {
  const buttonClicked = () => {
    console.log("<3 clicked", title);
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
