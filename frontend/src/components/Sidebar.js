import Button from "react-bootstrap/Button";
import Axios from "axios";
// import { useState } from "react";

const baseURL = "http://localhost:3001"; //move to .env

const Sidebar = (props) => {
  const cartItems = props.cartItems;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;
  //assuming the pizza is small s.price is used
  const pizzaPrice = cartItems.reduce((a, c) => a + c.sprice * c.qty, 0); //a-acuumulator, c-current item,0 -initial price

  // const [totalPrice, setTotalPrice] = useState(0);

  //5% for 50 or more 10% for 100 or more
  let bonusPercentage = 1;
  if (pizzaPrice >= 100) {
    bonusPercentage = 0.9;
  } else if (pizzaPrice >= 50) {
    bonusPercentage = 0.95;
  }

  const onCheckout = () => {
    //a form name, address,email, phone ->
    // button(Finalize checkout)->
    // Redirected to paypal payment gateway ->
    // make payment ->
    // use email(send a confirmation) ->

    //randomize orderid,customer
    console.log(cartItems);
    Axios.post(`${baseURL}/createOrder`, {
      orderid: "0104",
      customer: "C0000",
      pizzalist: cartItems,
      // ordercount: 1, //future implementation - if multiple orders
      total: (pizzaPrice * bonusPercentage).toFixed(2),
    })
      .then((res) => {
        alert("ORDER ENTERED");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="block col-3 sidebar">
      {cartItems.length === 0 && <div>{/* <p>empty</p> */}</div>}
      {cartItems.map((item) => (
        <div key={item.pizzaid} className="row">
          <div className="col-5 sidebarfont">{item.pizzatype}</div>
          <div className="col-3">
            <button onClick={() => onAdd(item)}>+</button>
            <button onClick={() => onRemove(item)}>-</button>
          </div>
          <div className="col-4 text-right sidebarfont">
            {item.qty} x ${item.sprice.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <div className="row">
            <div className="col-8 sidebarfont">Total Price</div>
            <div className="col-4 text-right sidebarfont">
              ${pizzaPrice.toFixed(2)}
            </div>
          </div>
          <hr />
          <div className="row">
            {bonusPercentage === 0.9 ? (
              <p>You have bought over $100. Enjoy your 10% off!</p>
            ) : bonusPercentage === 0.95 ? (
              <p>You have bought over $50. Enjoy your 5% off!</p>
            ) : (
              <p>Buy for over $50 and enjoy a 5% off !</p>
            )}
            <div className="col-8 sidebarfont">
              <b>Final Price</b>
            </div>
            <div className="col-4 sidebarfont text-right">
              <b>${(pizzaPrice * bonusPercentage).toFixed(2)}</b>
            </div>
          </div>
          <Button
            onClick={() => {
              onCheckout();
            }}
            variant="primary checkout"
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
