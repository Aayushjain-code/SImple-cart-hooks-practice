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
      return { ...it, quantity: it.quantity - 1 };
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
export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADDTOCART":
      return addToCart();
    case "REMOVEFROMCART":
    case "INCREASECART":
    case "DECREASECART":
    default:
  }
};
