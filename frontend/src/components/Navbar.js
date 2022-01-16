import Cart from "./Cart";

const Navbar = (props) => {
  const cartItems = props.cartItems;

  return (
    <nav className="navbar">
      <h1>The Pizza Site</h1>
      <div className="links">
        <a href="/">
          <Cart cartItems={cartItems} />
        </a>
        <a href="/signin">Signin</a>
      </div>
    </nav>
  );
};

export default Navbar;
