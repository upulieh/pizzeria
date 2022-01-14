import Home from "./Home";
import Sidebar from "./Sidebar";

const Content = (props) => {
  const listOfPizzas = props.listOfPizzas;
  return (
    <div className="content">
      <Home listOfPizzas={listOfPizzas} />
      {/* <Sidebar /> */}
    </div>
  );
};

export default Content;
