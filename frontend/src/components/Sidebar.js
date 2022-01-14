import { useState } from "react";

const Sidebar = () => {
  //to rerender a variable use the useState hook
  const [total, setTotal] = useState("50");

  const handleClick = (pizzaid, price, e) => {
    setTotal(100);
  };

  return (
    <div>
      <div>Total $. {total}</div>
      <button onClick={(e) => handleClick("M100", "10", e)}>Checkout</button>
    </div>
  );
};

export default Sidebar;
