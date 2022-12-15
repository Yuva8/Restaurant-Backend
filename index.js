require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("./database/conn");
const client = require("./models/clientSchema");
const cors = require("cors");
const router = require("./routes/router");

const port = process.env.PORT || 8003;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("server start");
});

app.use(router);
app.listen(port, () => {
  console.log(`server is running port number is ${port}`);
});
