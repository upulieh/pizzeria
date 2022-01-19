import Order from "./Order";

const OrderList = (props) => {
  const listOfOrders = props.listOfOrders;

  return (
    <div className="home">
      <h5 className="categories">PURCHASE HISTORY</h5>
      <div>
        {listOfOrders.map((order) => {
          return (
            <div className="container" key={order._id}>
              <Order {...order} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OrderList;
