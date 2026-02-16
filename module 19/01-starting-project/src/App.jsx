import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";

export default function App({}) {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleAddCartLength() {
    setCartLength(prevCartLength => prevCartLength + 1);
  }
  function handleSubtractCartLength() {
    setCartLength(prevCartLength => prevCartLength - 1);
  }

  function handleAddToCart(item) {
    const existingItem = cart.find(
      itm => itm.meal.name === item.meal.name
    );

    if (existingItem !== undefined) {
      handleAddAmountOfItem(item);
    }

    setCart(prevCart => [...prevCart, item]);

    handleAddCartLength();
  }

  function handleAddAmountOfItem(item) {
    setCart(prevCart => {
      return prevCart.map(itm =>
        itm.meal.name === item.meal.name
          ? { ...itm, amount: itm.amount + 1 }
          : itm
      );
    });

    handleAddCartLength();
  }
  function handleSubtractAmountOfItem(item) {
    setCart(prevCart => {
      return prevCart.map(itm =>
        itm.meal.name === item.meal.name
          ? { ...itm, amount: itm.amount + 1 }
          : itm
      );
    });

    handleSubtractCartLength();
  }

  return (
    <div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Cart cart={cart} handleAddAmountOfItem={handleAddAmountOfItem} handleSubtractAmountOfItem={handleSubtractAmountOfItem} />
      </Modal>

      <Header cartAmount={cartLength}  />

      <Meals addToCart={handleAddToCart} />
    </div>
  );
}