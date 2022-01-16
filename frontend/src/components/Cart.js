import { IconContext } from "react-icons";
import { ImCart } from "react-icons/im";

const Cart = (props) => {
  const cartItemCount = props.cartItemCount;

  return (
    <>
      {cartItemCount ? (
        <div className="cartItemCount">
          <ImCart />
          <p>{cartItemCount}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
