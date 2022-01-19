import Pizza from "./Pizza";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const PizzaList = (props) => {
  const listOfPizzas = props.listOfPizzas;
  const onAdd = props.onAdd;
  const categories = ["classic", "supreme", "signature"];
  const [classic, setClassic] = useState([]);
  const [supreme, setSupreme] = useState([]);
  const [signature, setSignature] = useState([]);

  useEffect(() => {
    setClassic(listOfPizzas.filter((item) => item.category === categories[0]));
    setSupreme(listOfPizzas.filter((item) => item.category === categories[1]));
    setSignature(
      listOfPizzas.filter((item) => item.category === categories[2])
    );
  }, [listOfPizzas]); 

  return (
    <div className="container">
      <h5 className="categories">{categories[0].toUpperCase()}</h5>
      <div className="row">
        {classic.map((pizza) => {
          return (
            <div
              key={pizza.pizzaid}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <Pizza pizza={pizza} onAdd={onAdd} />
            </div>
          );
        })}
      </div>

      <h5 className="categories">{categories[1].toUpperCase()}</h5>
      <div className="row">
        {supreme.map((pizza) => {
          return (
            <div
              key={pizza.pizzaid}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <Pizza pizza={pizza} onAdd={onAdd} />
            </div>
          );
        })}
      </div>

      <h5 className="categories">{categories[2].toUpperCase()}</h5>
      <div className="row">
        {signature.map((pizza) => {
          return (
            <div
              key={pizza.pizzaid}
              className="col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <Pizza pizza={pizza} onAdd={onAdd} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PizzaList;
