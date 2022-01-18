import { Link } from "react-router-dom";
import Cart from "./Cart";
import { GrLogin } from "react-icons/gr";

const Navbar = (props) => {
  const cartItemCount = props.cartItemCount;

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>The Pizza Site</h1>
      </Link>
      <div className="links">
        <Link to="/checkout">
          <Cart cartItemCount={cartItemCount} />
        </Link>
        <Link to="/orders">ORDERS</Link>
        <Link to="/signin">
          <GrLogin />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
