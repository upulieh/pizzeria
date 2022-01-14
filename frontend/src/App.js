import "./App.css";

import { useState, useEffect } from "react"; //useState hook
import Axios from "axios";

// import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import Sidebar from "./components/Sidebar";

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
      {/* <Navbar />
      <Sidebar /> */}
      <Home listOfPizzas={listOfPizzas} />
      <div>{/* <input type="text" placeholder="Name..."/> */}</div>
    </div>
  );
}

export default App;
