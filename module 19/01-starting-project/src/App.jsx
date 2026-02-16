import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import SubmitOrderForm from "./components/SubmitOrderForm";

export default function App({}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [notification, setNotification] = useState({
    isShowing: false,
    title: '',
    message: null,
    type: '',
  });

  function handleToggleCart() {
    setModalIsOpen((prevState) => !prevState);
  }
  function handleCloseCart() {
    setModalIsOpen(false);
  }
  function handleToSubmitOrder() {
    setModalIsOpen(false);
    setFormIsOpen(true);
  }

  function handleCloseForm() {
    setFormIsOpen(false);
  }

  return (
    <div>
      <Modal open={modalIsOpen} onClose={handleCloseCart}>
        <Cart closeCart={handleCloseCart} toSubmitOrder={handleToSubmitOrder} />
      </Modal>
      <Modal open={formIsOpen} onClose={handleCloseForm}>
        <SubmitOrderForm closeForm={handleCloseForm} />
      </Modal>
      

      <Header toggleCart={handleToggleCart} />

      <Meals />
    </div>
  );
}
