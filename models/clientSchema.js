const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
    unique: true,
  },
  climatic: {
    type: String,
    required: true,
  },
  popularcuisines: {
    type: String,
    required: true,
  },
  landcost: {
    type: Number,
    required: true,
  },
  totalpopulation: {
    type: Number,
    required: true,
  },
  working: {
    type: Number,
    required: true,
  },
  kids: {
    type: Number,
    required: true,
  },
});

const client = new mongoose.model("clientdata", clientSchema);

module.exports = client;
