import Cart from "./Cart";
import { GrLogin } from "react-icons/gr";

const Navbar = (props) => {
  const cartItemCount = props.cartItemCount;

  return (
    <nav className="navbar">
      <h1>The Pizza Site</h1>
      <div className="links">
        <Cart cartItemCount={cartItemCount} />
        <a href="/getOrders">ORDERS</a>
        <a href="/signin">
          <GrLogin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
