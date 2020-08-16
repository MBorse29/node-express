const express = require("express");
const app = express();
app.listen(3000, () => console.log("Listening on port 3000..."));

app.get("/", (req, res) => {
  console.log("Base route");
  res.send("You are on Home Page");
});

app.get("/modals", (req, res) => {
  console.log("Modals route");
  res.send({
    name: "marvel",
    img:
      "https://dl.dropboxusercontent.com/u/19954023/marvel_force_chart_img/marvel.png",
  });
});
