require("dotenv").config(); //environment variables

const express = require("express");
const app = express(); // used for applying middleware
const mongoose = require("mongoose"); //sets mongodb connection
const OrderModel = require("./models/Orders");
const PizzaModel = require("./models/Pizzas");
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://admin:admin@cluster0.vdolv.mongodb.net/pizzeria?retryWrites=true&w=majority`;

const cors = require("cors");
const { path } = require("path");

app.use(express.json()); //for parsing req
app.use(cors());

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/getPizzas", (req, res) => {
  PizzaModel.find({}, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(result);
    }
  });
});

app.get("/getOrders", (req, res) => {
  OrderModel.find({}, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(result);
    }
  });
});

//this functions must be async since we want to save this in the db
app.post("/createOrder", async (req, res) => {
  const order = req.body;
  const newOrder = new OrderModel(order);
  await newOrder.save();

  //return back to the frontend for verification
  res.json(order);
});

// for heroku deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  // if in production, with no requests, lead to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`SERVER IS RUNNING! on ${PORT}`);
}); // start api
