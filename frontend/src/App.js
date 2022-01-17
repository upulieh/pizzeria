import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import SignIn from "./pages/SignIn";
import ErrorPage from "./pages/ErrorPage";

import { useState, useEffect } from "react"; //useState hook
import Axios from "axios";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";

const baseURL = "http://localhost:3001"; //move to .env

// after authentication remove Main from /
function App() {
  const [loading, setLoading] = useState(false); //use this for something?
  const [listOfPizzas, setListOfPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]); //initially cart items is empty

  //adding to cart event handler
  const onAdd = (pizza) => {
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

  useEffect(() => {
    Axios.get(`${baseURL}/getPizzas`).then((res) => {
      setListOfPizzas(res.data);
    });

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);

  return (
    <Router>
      <Navbar cartItemCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <Content
              listOfPizzas={listOfPizzas}
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
            />
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
