import OrderPizza from "./OrderPizza";

const Order = (props) => {
  const pizzalist = props.pizzalist;
  const total = props.total;
  const timestamp = props.timestamp;

  return (
    <div className="card order">
      <div className="col-12">
        {pizzalist.map((pizzaitem) => {
          return <OrderPizza key={pizzaitem.pizzaid} {...pizzaitem} />;
        })}
      </div>
      <div className="col-12">
        <div className="container">
          <div className="row individual-prices">
            <div className="col-lg-10 col-md-10 col-xs-12 date">
              {timestamp.split("T")[0]}
              <br />
              {timestamp.split("T")[1].split(":")[0]}:{timestamp.split(":")[1]}
            </div>
            <div className="col-lg-2 col-md-2 col-xs-12">
              <p className="final-price">${total}.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
