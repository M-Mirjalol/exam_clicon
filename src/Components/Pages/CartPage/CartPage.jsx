import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page container">
      <div className="cart-left">
        <h2>
          Shopping Cart <span className="item-count">{cart.length} Items</span>
        </h2>

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              ✕
            </button>

            <img src={item.image} alt={item.title} />

            <div className="item-info">
              <h4>{item.title}</h4>
              <p>SKU: {item.id}</p>
            </div>

            <div className="price-box">
              ${item.price}
            </div>

            <div className="qty-box">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-right">
        <h3>Order Summary</h3>

        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="summary-row">
          <span>Shipping</span>
          <span className="free">Free</span>
        </div>

        <hr />

        <div className="summary-total">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <button className="checkout-btn">
          Proceed to Checkout →
        </button>
      </div>
    </div>
  );
};

export default CartPage;