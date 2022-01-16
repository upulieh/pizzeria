const Cart = (props) => {
  const cartItems = props.cartItems;

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <p>empty</p>
        </div>
      ) : (
        <div>{cartItems.length}</div>
      )}
    </div>
  );
};

export default Cart;
