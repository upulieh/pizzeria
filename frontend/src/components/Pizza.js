const Pizza = (props) => {
  const pizzatype = props.pizza.pizzatype;
  const pizzaid = props.pizza.pizzaid;
  const sprice = props.pizza.sprice;
  const mprice = props.pizza.mprice;
  const lprice = props.pizza.lprice;

  const handleClick = (pizzaid, price, e) => {
    console.log(`Add ${pizzaid} of price ${price}`, e.target);
  };

  return (
    <div>
      <div className="pizza-preview" key={pizzaid}>
        <h2>{pizzatype}</h2>
        <h4>Small: {sprice}</h4>
        <h4>Medium: {mprice}</h4>
        <h4>Large: {lprice}</h4>
      </div>

      <div>
        <button onClick={(e) => handleClick("M100", "10", e)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Pizza;
