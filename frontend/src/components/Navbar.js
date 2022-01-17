import { Link } from "react-router-dom";
import Cart from "./Cart";
import { GrLogin } from "react-icons/gr";

const Navbar = (props) => {
  const cartItemCount = props.cartItemCount;

  return (
    <nav className="navbar">
      <h1>The Pizza Site</h1>
      <div className="links">
        <Link to="/checkout">
          <Cart cartItemCount={cartItemCount} />
        </Link>
        <Link to="/getOrders">ORDERS</Link>
        <Link to="/signin">
          <GrLogin />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
