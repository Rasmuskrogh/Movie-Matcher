import React, { useEffect } from "react";
import HeartIcon from "./HeartIcon";
import XIcon from "./XIcon";
import Image from "next/image";
import {
  posters,
  allPosters,
  titles,
  years,
  runtimes,
  genres,
  plots,
  directors,
  actors,
  writers,
  imdbRatings,
  rottenTomatoesRatings,
  metaCriticRatings,
} from "../actions";
import { write } from "fs";
const axios = require("axios");

const Card = async () => {
  const movieCount = await allPosters();
  const randomIndex = Math.floor(Math.random() * (movieCount - 1));
  const poster = await posters(randomIndex);
  const title = await titles(randomIndex);
  const year = await years(randomIndex);
  const runtime = await runtimes(randomIndex);
  const genre = await genres(randomIndex);
  const plot = await plots(randomIndex);
  const director = await directors(randomIndex);
  const movieActors = await actors(randomIndex);
  const writer = await writers(randomIndex);
  const imdbRating = await imdbRatings(randomIndex);
  const rottenTomatoesRating = await rottenTomatoesRatings(randomIndex);
  const metaCriticRating = await metaCriticRatings(randomIndex);

  console.log(
    "title: ",
    title,
    "year: ",
    year,
    "runtime: ",
    runtime,
    "genre: ",
    genre,
    "plot: ",
    plot,
    "director: ",
    director,
    "actors: ",
    movieActors,
    "writer: ",
    writer,
    "imdbRating: ",
    imdbRating,
    "rottenTomatoesRating: ",
    rottenTomatoesRating,
    "metaCriticRating: ",
    metaCriticRating
  );
  return (
    <>
      <div className="m-1 w-98% h-[550px] rounded relative">
        {
          <div className="flex flex-row items-end h-full pb-6">
            <XIcon
              poster={poster}
              title={title}
              year={year}
              runtime={runtime}
              genre={genre}
              plot={plot}
              director={director}
              movieActors={movieActors}
              writer={writer}
              imdbRating={imdbRating}
              rottenTomatoesRating={rottenTomatoesRating}
              metaCriticRating={metaCriticRating}
            />
            <HeartIcon
              poster={poster}
              title={title}
              year={year}
              runtime={runtime}
              genre={genre}
              plot={plot}
              director={director}
              movieActors={movieActors}
              writer={writer}
              imdbRating={imdbRating}
              rottenTomatoesRating={rottenTomatoesRating}
              metaCriticRating={metaCriticRating}
            />
            <Image src={poster} alt="poster image" fill className="rounded" />
          </div>
        }
      </div>
    </>
  );
};

export default Card;
