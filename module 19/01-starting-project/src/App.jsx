import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";

export default function App({}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleToggleCart() {
    setModalIsOpen((prevState) => !prevState);
  }
  function handleCloseCart() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <Modal open={modalIsOpen} onClose={handleCloseCart}>
        <Cart closeCart={handleCloseCart} />
      </Modal>

      <Header toggleCart={handleToggleCart} />

      <Meals />
    </div>
  );
}
