const mongoose = require("mongoose");

let trainingSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: "This field is required",
  },
  pageURL: {
    type: String,
    required: "This field is required",
  },
  iconURL: {
    type: String,
    required: "This field is required",
  },
  favorite: {
    type: String,
    required: "This field is required",
  },
});

mongoose.model("Training", trainingSchema);
