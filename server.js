const express = require("express");
const app = express();

const fs = require("fs");
const path = require("path");

app.listen(3000, () => console.log("Listening on port 3000..."));

app.get("/", (req, res) => {
  console.log("Base route");
  res.send("You are on Home Page");
});

app.get("/modals", (req, res) => {
  res.sendFile("./data/marvel.json", { root: __dirname });
});
