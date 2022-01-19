// defines the structure of the model Pizzas
const monggose = require("mongoose");

const PizzaSchema = new monggose.Schema({
  pizzaid: {
    type: String,
    unique: true,
  },
  pizzatype: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: false,
  },
  sprice: {
    type: Number,
    required: false,
  },
  mprice: {
    type: Number,
    required: false,
  },
  lprice: {
    type: Number,
    required: false,
  },
});

const PizzaModel = monggose.model("pizzas", PizzaSchema);
module.exports = PizzaModel;
