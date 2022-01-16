import Button from "react-bootstrap/Button";
import { useState } from "react";

const Sidebar = (props) => {
  const cartItems = props.cartItems;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;
  const pizzaPrice = cartItems.reduce((a, c) => a + c.sprice * c.qty, 0); //a-acuumulator, c-current item,0 -initial price

  //5% for 50 or more 10% for 100 or more
  let bonusPercentage = 1;
  if (pizzaPrice >= 100) {
    bonusPercentage = 0.9;
  } else if (pizzaPrice >= 50) {
    bonusPercentage = 0.95;
  }

  //to rerender a variable use the useState hook
  // const [total, setTotal] = useState("50");

  const onCheckout = (e) => {
    console.log(e);
  };

  return (
    <div className="block col-3 sidebar">
      {cartItems.length === 0 && (
        <div>
          <p>empty</p>
        </div>
      )}
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
