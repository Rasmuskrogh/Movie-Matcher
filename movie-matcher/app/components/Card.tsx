"use client";
import React, { useEffect } from "react";
import HeartIcon from "./HeartIcon";
import XIcon from "./XIcon";
import Image from "next/image";
const axios = require("axios");

const Card = () => {
  const poster =
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg";

  const posterTest = "http://localhost:8000/movies";

  useEffect(() => {
    axios
      .get("/movies")
      .then(function (response: string) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  }, []);

  console.log(posterTest);

  return (
    <>
      <div
        className="m-1 w-98% h-[550px] rounded relative"
        //style={{ backgroundImage: `url(${poster})` }}
      >
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
