import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import OrdersPage from "./pages/OrdersPage";
import SignInPage from "./pages/SignInPage";
import ErrorPage from "./pages/ErrorPage";

import { useState, useEffect } from "react";
import Axios from "axios";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import "./App.css";
const REACT_APP_BASE_URL = "http://localhost:5000";

// after authentication remove Main from /
function App() {
  const [listOfPizzas, setListOfPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (pizza) => {
    let exist = false;
    let arr = cartItems;

    arr = arr.map((x) => {
      let val = x;
      if (x.pizzaid === pizza.pizzaid) {
        exist = true; //if found inside cart
        val = { ...x, qty: x.qty + 1 };
      }
      return val;
    });
    setCartItems(arr);
    if (!exist) {
      setCartItems([...cartItems, { ...pizza, qty: 1 }]);
    }
  };

  const onRemove = (pizza) => {
    let qtyOne = true;
    let arr = cartItems;

    arr = arr.map((x) => {
      let val = x;
      if (pizza.pizzaid === x.pizzaid && x.qty > 1) {
        qtyOne = false; //if found inside cart
        val = { ...x, qty: x.qty - 1 };
      }
      return val;
    });
    setCartItems(arr);
    if (qtyOne) {
      setCartItems(arr.filter((x) => x.pizzaid !== pizza.pizzaid));
    }
  };

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_BASE_URL || REACT_APP_BASE_URL}/getPizzas`
    ).then((res) => {
      setListOfPizzas(res.data);
    });
    setTimeout(() => {}, 1000);
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
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
