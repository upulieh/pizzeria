require("dotenv").config(); //environment variables

// entry point for API
const express = require("express");
const app = express(); // used for applying middleware
const mongoose = require("mongoose"); //sets mongodb connection

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vdolv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

//put in .env
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING! on ${process.env.PORT}`);
}); // start api
