require("dotenv").config(); //environment variables

// entry point for API
const express = require("express");
const app = express(); // used for applying middleware
const mongoose = require("mongoose"); //sets mongodb connection
const OrderModel = require("./models/Orders");
const PizzaModel = require("./models/Pizzas");

const cors = require("cors");

app.use(express.json()); //parsing req
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vdolv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);
// .catch((err) => console.log(err));

//use routes instead of these http api requests
//req - get info sent from frontend
//res - send info from backend to frontend

app.get("/getPizzas", (req, res) => {
  //will only use res
  PizzaModel.find({}, (error, result) => {
    if (error) {
      res.json(error);
    } else {
      res.json(result);
    }
  });
});

app.get("/getOrders", (req, res) => {
  //will only use res
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
  //will use both req(consists of body object sent from frontend) and res
  const order = req.body;
  const newOrder = new OrderModel(order);
  await newOrder.save();

  //return back to the frontend for verification
  res.json(order);

  //handle exception
});

//put in .env
app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING! on ${process.env.PORT}`);
}); // start api
