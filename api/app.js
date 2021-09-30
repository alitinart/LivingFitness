const app = require("express")();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const database = require("./db/db");
const Training = require("mongoose").model("Training");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT");
  next();
});

let favorites = [];

app.get("/meals", (req, res) => {
  res.json({
    breakfast: [
      {
        name: "Scrambled Eggs",
        ingredients: ["Eggs", "Oil", "Tomatoes"],
      },
      {
        name: "Protein Beans",
        ingredients: ["Beans", "Onion"],
      },
      {
        name: "Protein Beans",
        ingredients: ["Beans", "Onion"],
      },
    ],
    lunch: [
      {
        name: "Scrambled Eggs",
        ingredients: ["Eggs", "Oil", "Tomatoes"],
      },
      {
        name: "Protein Beans",
        ingredients: ["Beans", "Onion"],
      },
      {
        name: "Protein Beans",
        ingredients: ["Beans", "Onion"],
      },
    ],
    dinner: [
      {
        name: "Scrambled Eggs",
        ingredients: ["Eggs", "Oil", "Tomatoes"],
      },
      {
        name: "Protein Beans",
        ingredients: ["Beans", "Onion"],
      },
      {
        name: "Protein Beans",
        ingredients: ["Beans", "Onion"],
      },
    ],
  });
});

app.post("/favorites", (req, res) => {
  let reqData = new Training(req.body);

  reqData.save().then((item) => {
    res.send(reqData);
  });
});

app.get("/favorites", (req, res) => {
  res.json(favorites);
});

app.listen(8081, () => {
  console.log("App Listening at http://localhost:8081");
});
