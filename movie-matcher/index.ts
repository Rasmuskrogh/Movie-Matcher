const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

const OMDBAPI = process.env.OMDBAPIKEY;

app.get("/", (req: any, res: any) => {
  res.json("hey yall!");
});

app.get("/movies", (req: any, res: any) => {
  const options = {
    method: "GET",
    url: `https://www.omdbapi.com/?i=tt3896198&apikey=${OMDBAPI}`,
  };

  axios
    .request(options)
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
