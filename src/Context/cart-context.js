import { createContext, useContext, useState } from "react";

import { itemsInCart } from "../DummyData/itemsInCart";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const getItemInCart = (items, id) => items.filter((it) => it.id === id);

  const addToCart = (itemId, price) => {
    setItems(items + 1);
    setTotalPrice(totalPrice + price);
    let newCart;
    if (getItemInCart(cartItems, itemId).length > 0) {
      newCart = cartItems.map((it) => {
        if (it.id === itemId) {
          return { ...it, quantity: it.quantity + 1 };
        } else {
          return it;
        }
      });
    } else {
      let selectedItem = getItemInCart(itemsInCart, itemId)[0];
      selectedItem.quantity += 1;
      newCart = [...cartItems, selectedItem];
    }
    setCartItems(newCart);
  };
  const removeFromCart = (itemId, price) => {
    cartItems.map((it) => {
      if (it.id === itemId) {
        let numberOfItem = it.quantity;
        setItems(items - numberOfItem);
        setTotalPrice(totalPrice - price * numberOfItem);
      }
    });

    let updatedCart = cartItems.filter((it) => {
      return it.id !== itemId;
    });

    setCartItems(updatedCart);
  };
  const decreaseCart = (itemId, price) => {
    setItems(items - 1);
    setTotalPrice(totalPrice - price);
    let newCart = cartItems.map((it) => {
      if (it.id === itemId) {
        if (it.quantity === 0) {
          let updatedCart = cartItems.filter((it) => {
            return it.id !== itemId;
          });
        } else {
          return { ...it, quantity: it.quantity - 1 };
        }
      } else {
        return it;
      }
    });
    setCartItems(newCart);
  };
  const increaseCart = (itemId, price) => {
    setItems(items + 1);
    setTotalPrice(totalPrice + price);
    let newCart = cartItems.map((it) => {
      if (it.id === itemId) {
        return { ...it, quantity: it.quantity + 1 };
      } else {
        return it;
      }
    });
    setCartItems(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        totalPrice,
        cartItems,
        addToCart,
        decreaseCart,
        removeFromCart,
        increaseCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
