import PizzaList from "./PizzaList";

const Home = (props) => {
  const listOfPizzas = props.listOfPizzas;
  return (
    <div className="home">
      <h2>Checkout our Pizzas</h2>
      <PizzaList listOfPizzas={listOfPizzas} />
    </div>
  );
};

export default Home;
