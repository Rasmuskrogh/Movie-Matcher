const PORT = 8000;
//import { sql } from "@vercel/postgres";
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();
//const { Pool } = require("pg");

//const { Pool } = pg;
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });

// pool.connect((err: any) => {
//   if (err) throw err;
//   console.log("Connect to postgreSQL sucessfully!");
// });
const app = express();

// app.user(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

const OMDBAPI = process.env.OMDBAPIKEY;
const OMDBURL = `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDBAPI}`;
//const DBURL = process.env.POSTGRES_URL;
// const IMDBID = sql`
//     SELECT * FROM imdbid
// `;

// app.get("/imdbid", (req: any, res: any) => {
//   res(IMDBID);
// });

// const getMovies = (req: any, res: any) => {
//   pool.query("SELECT * FROM hardcodec_movies", (error: any, results: any) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(results.rows);
//   });
// };

app.get("/", (req: any, res: any) => {
  res.json("hey yall!");
});

// app.get("/movies", getMovies);

app.get("/omdbapimovies", (req: any, res: any) => {
  axios
    .get(OMDBURL)
    .then((response: any) => {
      res.json(response.data);
    })
    .catch((error: any) => {
      console.error(error);
    });
});

/* app.get("/movies", (req: any, res: any) => {
  axios
    .get(DBURL)
    .then((response: any) => {
      res.json(response.data);
    })
    .catch((error: any) => {
      console.error(error);
    });
});
 */
app.get("/perl", (req: any, res: any) => {
  res.json("Hi cutie pie!");
});

app.listen(8000, () => console.log(`Server is running on port ${8000}`));
