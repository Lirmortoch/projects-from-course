import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";

export default function App({}) {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleAddCartPrice(item) {
    setCartPrice((prevPrice) => prevPrice + item.meal.price);
  }
  function handleSubtractCartPrice(item) {
    setCartPrice((prevPrice) => prevPrice - item.meal.price);
  }

  function handleAddCartLength() {
    setCartLength((prevCartLength) => prevCartLength + 1);
  }
  function handleSubtractCartLength() {
    setCartLength((prevCartLength) => prevCartLength - 1);
  }

  function handleAddToCart(item) {
    const existingItem = cart.find((itm) => itm.meal.name === item.meal.name);

    if (existingItem !== undefined) {
      handleAddAmountOfItem(item);
    }

    setCart((prevCart) => [...prevCart, item]);

    handleAddCartLength();
    handleAddCartPrice(item);
  }

  function handleAddAmountOfItem(item) {
    setCart((prevCart) => {
      return prevCart.map((itm) =>
        itm.meal.name === item.meal.name
          ? { ...itm, amount: itm.amount + 1 }
          : itm,
      );
    });

    handleAddCartLength();
    handleAddCartPrice(item);
  }
  function handleSubtractAmountOfItem(item) {
    setCart((prevCart) => {
      return prevCart
        .map((itm) =>
          itm.meal.name === item.meal.name
            ? { ...itm, amount: itm.amount - 1 }
            : itm,
        )
        .filter((itm) => itm.amount !== 0);
    });

    handleSubtractCartLength();
    handleSubtractCartPrice(item);
  }

  function handleToggleCart() {
    setModalIsOpen((prevState) => !prevState);
  }
  function handleCloseCart() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Modal open={modalIsOpen} onClose={handleCloseCart}>
        <Cart
          cart={cart}
          handleAddAmountOfItem={handleAddAmountOfItem}
          handleSubtractAmountOfItem={handleSubtractAmountOfItem}
          closeCart={handleCloseCart}
          cartTotal={cartPrice}
        />
      </Modal>

      <Header cartAmount={cartLength} toggleCart={handleToggleCart} />

      <Meals addToCart={handleAddToCart} />
    </div>
  );
}
