const OrderPizza = (props) => {
  const imageurl = props.imageurl;
  const category = props.category;
  const pizzaid = props.pizzaid;
  const pizzatype = props.pizzatype;
  const qty = props.qty;
  const sprice = props.sprice;

  return (
    <div className="row pizzaitem">
      <div className="col-lg-1 col-md-1" />
      <div className="col-lg-2 col-md-2 col-2">
        <img src={imageurl} />
      </div>
      <div className="col-lg-2 col-md-2 mt-4 order-text col-3">
        Category {category}
      </div>
      <div className="col-lg-4 col-md-4 mt-4 order-text col-4">
        {pizzatype} ({pizzaid})
      </div>
      <div className="col-lg-1 col-md-1 col-1 mt-4" />
      <div className="col-lg-2 col-md-2 col-2 mt-4 prices">
        ${sprice}.00 X {qty}
      </div>
    </div>
  );
};

export default OrderPizza;
