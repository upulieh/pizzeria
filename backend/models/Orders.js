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
      category: {
        type: String,
        enum: ["classic", "signature", "supreme"],
        required: true,
      },
      imageurl: {
        type: String,
        required: false,
      },
      sprice: {
        type: Number,
      },
      mprice: {
        type: Number,
      },
      lprice: {
        type: Number,
      },
      pizzaid: {
        type: String,
        required: true,
      },
      pizzatype: {
        type: String,
        required: true,
      },
      qty: {
        type: Number,
        required: true,
      },
      pizzasize: {
        type: String,
        enum: ["Small", "Medium", "Large"],
        default: "Small",
      },
    },
  ],
  ordercount: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
  },
});

const OrderModel = monggose.model("orders", OrdersSchema);
module.exports = OrderModel;
