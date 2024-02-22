import React, { useEffect } from "react";
import HeartIcon from "./HeartIcon";
import XIcon from "./XIcon";
import Image from "next/image";
import { posters, allPosters } from "../actions";
const axios = require("axios");

const Card = async () => {
  const movieCount = await allPosters();
  const randomIndex = Math.floor(Math.random() * (movieCount - 1));
  const poster = await posters(randomIndex);

  return (
    <>
      <div className="m-1 w-98% h-[550px] rounded relative">
        {
          <div className="flex flex-row items-end h-full pb-6">
            <XIcon />
            <HeartIcon />
            <Image src={poster} alt="poster image" fill className="rounded" />
          </div>
        }
      </div>
    </>
  );
};

export default Card;
