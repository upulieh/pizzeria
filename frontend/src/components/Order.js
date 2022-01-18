import { BsFillClockFill } from "react-icons/bs";
import PizzaItem from "./PizzaItem";

const Order = (props) => {
  const pizzalist = props.pizzalist;
  const total = props.total;
  const timestamp = props.timestamp;

  return (
    <div className="card order">
      <div className="col-12">
        {pizzalist.map((pizzaitem) => {
          return <PizzaItem key={pizzaitem.pizzaid} {...pizzaitem} />;
        })}
      </div>
      <div className="col-12">
        <div className="container">
          <div className="row individual-prices">
            <div className="col-10 date">
              {timestamp.split("T")[0]}
              <br />
              {timestamp.split("T")[1].split(":")[0]}:{timestamp.split(":")[1]}
            </div>
            <div className="col-2 final-price">${total}.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
