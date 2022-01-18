const PizzaItem = (props) => {
  const imageurl = props.imageurl;
  const category = props.category;
  const pizzaid = props.pizzaid;
  const pizzatype = props.pizzatype;
  const pizzasize = props.pizzasize;
  const qty = props.qty;
  const sprice = props.sprice;

  return (
    <div className="row pizzaitem">
      <img className="col-2" src={imageurl} />
      <div className="col-2 mt-4">Category {category}</div>
      <div className="col-4 mt-4">
        {pizzatype} ({pizzaid})
      </div>
      <div className="col-1 mt-4">${sprice}</div>
      <div className="col-1 mt-4">{pizzasize}</div>
      <div className="col-2 mt-4 prices">
        ${sprice}.00 X {qty}
      </div>
    </div>
  );
};

export default PizzaItem;
