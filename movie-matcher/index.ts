const PORT = 8000;
//import { sql } from "@vercel/postgres";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const OMDBAPI = process.env.OMDBAPIKEY;
const OMDBURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDBAPI}`;

// const IMDBID = sql`
//     SELECT * FROM imdbid
// `;

// app.get("/imdbid", (req: any, res: any) => {
//   res(IMDBID);
// });

app.get("/", (req: any, res: any) => {
  res.json("hey yall!");
});

app.get("/movies", (req: any, res: any) => {
  axios
    .get(OMDBURL)
    .then((response: any) => {
      res.json(response.data);
    })
    .catch((error: any) => {
      console.error(error);
    });
});

app.get("/perl", (req: any, res: any) => {
  res.json("Hi cutie pie!");
});

app.listen(8000, () => console.log(`Server is running on port ${8000}`));
