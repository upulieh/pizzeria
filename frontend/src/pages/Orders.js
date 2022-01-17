import { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

const Orders = () => {
  const [listOfOrders, setListOfOrders] = useState([]);

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_BASEURL}/getOrders`).then((res) => {
      setListOfOrders(res.data);
    });
  }, []);

  return (
    <Container className="page-size">
      {listOfOrders.map((order) => (
        <div key={order._id}>
          {order.pizzalist.map((pizza) => (
            <div key={pizza.pizzaid}>
              {pizza.pizzaid}
              {pizza.category}
              {pizza.pizzatype}
              {pizza.qty}
            </div>
          ))}
          <div>Total ${order.total}</div>
        </div>
      ))}
    </Container>
  );
};

export default Orders;
