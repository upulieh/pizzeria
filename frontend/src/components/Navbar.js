import Cart from "./Cart";

const Navbar = (props) => {
  const cartItemCount = props.cartItemCount;

  return (
    <nav className="navbar">
      <h1>The Pizza Site</h1>
      <div className="links">
        <Cart cartItemCount={cartItemCount} />
        <a href="/signin">Signin</a>
      </div>
    </nav>
  );
};

export default Navbar;
