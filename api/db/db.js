const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/TaxiMeter", (err) => {
  if (!err) {
    console.log("Successfully connected to MongoDB :)");
  } else {
    console.log("Error in connection " + err);
  }
});

require("./models/training.model.js");
