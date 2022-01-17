import PizzaList from "./PizzaList";

const Home = (props) => {
  const listOfPizzas = props.listOfPizzas;
  const onAdd = props.onAdd;
  const cartEmpty = props.cartEmpty;

  return (
    <>
      {cartEmpty ? (
        <div className="block col-12 home">
          <PizzaList listOfPizzas={listOfPizzas} onAdd={onAdd} />
        </div>
      ) : (
        <div className="block col-9 home">
          <PizzaList listOfPizzas={listOfPizzas} onAdd={onAdd} />
        </div>
      )}
    </>
  );
};

export default Home;
