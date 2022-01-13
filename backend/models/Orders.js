// defines the structure of the model Orders
const monggose = require("mongoose");

const OrdersSchema = new monggose.Schema({
  orderid: {
    type: String,
    unique: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  customer: {
    type: String,
    required: true,
  },
  pizzalist: [
    {
      pizzatype: {
        type: monggose.Schema.Types.ObjectId,
        ref: "pizzas",
      },
      pizzacount: Number,
      pizzasize: { String, enum: ["Small", "Medium", "Large"] },
    },
  ],
  ordercount: {
    type: Number,
    default: 1,
  },
});

const OrderModel = monggose.model("orders", OrdersSchema);
module.exports = OrderModel;
