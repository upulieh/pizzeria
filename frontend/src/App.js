import "./App.css";
import { useState, useEffect } from "react"; //useState hook
import Axios from "axios";

const baseURL = "http://localhost:3001"; //move to .env

function App() {
  const [listOfPizzas, setListOfPizzas] = useState([]);

  //useEffect hooks run immediately when a website is loaded
  // this is where backend api call is made
  // where axios is used
  useEffect(() => {
    Axios.get(`${baseURL}/getPizzas`).then((res) => {
      setListOfPizzas(res.data);
    }); // get req, then use the promise to retrieve the data
  }, []);

  return (
    <div className="App">
      <div className="pizzasDisplay">
        {listOfPizzas.map((pizza) => {
          return (
            <div>
              <h1>Pizza type: {pizza.pizzatype}</h1>
              <h1>Small: {pizza.sprice}</h1>
              <h1>Medium: {pizza.mprice}</h1>
              <h1>Large: {pizza.lprice}</h1>
            </div>
          );
        })}
      </div>
      <div>{/* <input type="text" placeholder="Name..."/> */}</div>
    </div>
  );
}

export default App;
