import { useState, useEffect } from "react";
import Axios from "axios";
import OrderList from "../components/OrderList";
const REACT_APP_BASE_URL = "http://localhost:5000";

const OrdersPage = () => {
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_BASE_URL || REACT_APP_BASE_URL}/getOrders`
    ).then((res) => {
      setListOfOrders(res.data);
    });
  }, []);

  return (
    <div className="page-size">
      <OrderList listOfOrders={listOfOrders} />
    </div>
  );
};

export default OrdersPage;
