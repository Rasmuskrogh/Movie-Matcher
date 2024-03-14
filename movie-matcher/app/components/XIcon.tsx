"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

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

const XIcon = ({
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
    console.log("X clicked", title);
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
