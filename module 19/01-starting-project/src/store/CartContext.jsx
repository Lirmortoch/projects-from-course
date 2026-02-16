import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  cartLength: 0,
  cartPrice: 0.00,

  addCartPrice: () => {},
  subtractCartPrice: () => {},

  addCartLength: () => {},
  subtractCartLength: () => {},

  addToCart: () => {},

  addAmountOfItem: () => {},
  subtractAmountOfItem: () => {},
});

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartPrice, setCartPrice] = useState(0.00);

  function addCartPrice(item) {
    setCartPrice((prevPrice) => {
      const currentPrice = (prevPrice + Number.parseFloat(item.meal.price)).toFixed(2);
      
      return Number.parseFloat(currentPrice);
    });
  }
  function subtractCartPrice(item) {
    setCartPrice((prevPrice) => {
      const currentPrice = (prevPrice - Number.parseFloat(item.meal.price)).toFixed(2);

      return Number.parseFloat(currentPrice);
    });
  }

  function addCartLength() {
    setCartLength((prevCartLength) => prevCartLength + 1);
  }
  function subtractCartLength() {
    setCartLength((prevCartLength) => prevCartLength - 1);
  }

  function addToCart(item) {
    const existingItem = cart.find((itm) => itm.meal.name === item.meal.name);

    if (existingItem !== undefined) {
      addAmountOfItem(item);
      return;
    }

    setCart((prevCart) => [...prevCart, item]);

    addCartLength();
    addCartPrice(item);
  }

  function addAmountOfItem(item) {
    setCart((prevCart) => {
      return prevCart.map((itm) =>
        itm.meal.name === item.meal.name
          ? { ...itm, amount: itm.amount + 1 }
          : itm,
      );
    });

    addCartLength();
    addCartPrice(item);
  }
  function subtractAmountOfItem(item) {
    setCart((prevCart) => {
      return prevCart
        .map((itm) =>
          itm.meal.name === item.meal.name
            ? { ...itm, amount: itm.amount - 1 }
            : itm,
        )
        .filter((itm) => itm.amount !== 0);
    });

    subtractCartLength();
    subtractCartPrice(item);
  }

  const cartCtxValue = {
    cart,
    cartLength,
    cartPrice,
    
    addCartPrice,
    subtractCartPrice,

    addCartLength,
    subtractCartLength,

    addToCart,

    addAmountOfItem,
    subtractAmountOfItem,
  }

  return <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
}