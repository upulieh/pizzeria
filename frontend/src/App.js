import { useState, useEffect } from "react"; //useState hook
import Axios from "axios";
// import { SpinnerCircular } from "spinners-react";

import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const baseURL = "http://localhost:3001"; //move to .env

function App() {
  const [loading, setLoading] = useState(false);
  const [listOfPizzas, setListOfPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]); //initially cart items is empty

  //adding to cart event handler
  const onAdd = (pizza) => {
    console.log("on add");
    const exist = cartItems.find((x) => x.pizzaid === pizza.pizzaid); //check if pizzaid is already in the list
    //if already available, then increase quantity
    if (exist) {
      //only update the particular pizza's quantity (else keep as it is)
      setCartItems(
        cartItems.map((x) =>
          x.pizzaid === pizza.pizzaid ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      //if pizza does not exist in the cart (add it) ([...cartItems] is for array concat)
      setCartItems([...cartItems, { ...pizza, qty: 1 }]);
    }
  };

  const onRemove = (pizza) => {
    console.log("on remove");
    const exist = cartItems.find((x) => x.pizzaid === pizza.pizzaid); //check if pizzaid is already in the list
    if (exist.qty === 1) {
      //removing from cart
      setCartItems(cartItems.filter((x) => x.pizzaid !== pizza.pizzaid));
    } else {
      //reduce qty
      setCartItems(
        cartItems.map((x) =>
          x.pizzaid === pizza.pizzaid ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //useEffect hooks run immediately when a website is loaded
  // this is where backend api call is made
  // where axios is used
  useEffect(() => {
    Axios.get(`${baseURL}/getPizzas`).then((res) => {
      setListOfPizzas(res.data);
    }); // get req, then use the promise to retrieve the data

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="text-center">
          {/* <SpinnerCircular сolor={"#3D2514"} enabled={loading} size={60} /> */}
          <h2>Loading</h2>
        </div>
      ) : (
        <>
          {/* remove this prop cartItems from Navbar after checking */}
          <Navbar cartItemCount={cartItems.length} />
          <Content
            listOfPizzas={listOfPizzas}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        </>
      )}
    </div>
  );
}

export default App;
