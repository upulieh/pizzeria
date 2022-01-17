import PizzaList from "./PizzaList";

const Home = (props) => {
  const listOfPizzas = props.listOfPizzas;
  const onAdd = props.onAdd;
  const cartEmpty = props.cartEmpty;

  return (
    <>
      {/* even if cart is empty or not, close sidebar when size below 768px */}
      <div className={cartEmpty ? "block col-12 home" : "block col-9 home"}>
        <PizzaList listOfPizzas={listOfPizzas} onAdd={onAdd} />
      </div>
    </>
  );
};

export default Home;
