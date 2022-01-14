import Pizza from "./Pizza";

const PizzaList = (props) => {
  const listOfPizzas = props.listOfPizzas;
  return (
    <div className="pizza-list">
      {listOfPizzas.map((pizza) => {
        return <Pizza pizza={pizza} />;
      })}
    </div>
  );
};

export default PizzaList;
