import Home from "./Home";
import Sidebar from "./Sidebar";

const Content = (props) => {
  const listOfPizzas = props.listOfPizzas;
  const cartItems = props.cartItems;
  const onAdd = props.onAdd;
  const onRemove = props.onRemove;
  return (
    <div className="page-size">
      <div className="row">
        <Home
          listOfPizzas={listOfPizzas}
          onAdd={onAdd}
          cartEmpty={cartItems.length === 0}
        />
        {cartItems.length !== 0 && (
          <Sidebar cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        )}
      </div>
    </div>
  );
};

export default Content;
