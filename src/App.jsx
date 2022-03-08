import "./styles.css";

import { itemsInCart } from "./DummyData/itemsInCart";
import { useCart } from "./Context/cart-context";

export default function App() {
  const {
    items,
    totalPrice,
    cartItems,
    addToCart,
    decreaseCart,
    removeFromCart,
    increaseCart
  } = useCart();
  return (
    <div className="App">
      <h2>Cart</h2>
      {itemsInCart.map((item) => {
        return (
          <div key={item.id}>
            {item.id}. {item.name} || Rs.{item.price} ||{" "}
            <button onClick={() => addToCart(item.id, item.price)}>Add</button>
          </div>
        );
      })}
      <h2>
        Bucket || Items:{items} || Price:{totalPrice}
      </h2>
      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            {item.name}---Quantity:{item.quantity} ||
            <button onClick={() => increaseCart(item.id, item.price)}>+</button>
            <button onClick={() => decreaseCart(item.id, item.price)}>-</button>
            <button onClick={() => removeFromCart(item.id, item.price)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
