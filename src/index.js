import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartProvider } from "./Context/cart-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <CartProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CartProvider>,
  rootElement
);
