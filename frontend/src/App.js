import { useState, useEffect } from "react"; //useState hook
import Axios from "axios";
// import { SpinnerCircular } from "spinners-react";

import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

const baseURL = "http://localhost:3001"; //move to .env

function App() {
  const [loading, setLoading] = useState(false);
  const [listOfPizzas, setListOfPizzas] = useState([]);

  //useEffect hooks run immediately when a website is loaded
  // this is where backend api call is made
  // where axios is used
  useEffect(() => {
    Axios.get(`${baseURL}/getPizzas`).then((res) => {
      setListOfPizzas(res.data);
    }); // get req, then use the promise to retrieve the data

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="text-center">
          {/* <SpinnerCircular сolor={"#3D2514"} enabled={loading} size={60} /> */}
          <h2>Loading</h2>
        </div>
      ) : (
        <>
          <Navbar />
          <Content listOfPizzas={listOfPizzas} />
        </>
      )}
    </div>
  );
}

export default App;
