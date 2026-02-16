import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import SubmitOrderForm from "./components/SubmitOrderForm";
import Notification from "./components/Notification";

export default function App({}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [notification, setNotification] = useState({
    isShowing: false,
    content: {
        title: '',
        message: '',
        type: '',
      },
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

  function handleShowNotification(title, message, type = '') {
    setFormIsOpen(false);
    setNotification({
      isShowing: true,
      content: {
        title,
        message,
        type,
      },
    });
  }
  function handleCloseNotification() {
    setNotification({
      isShowing: false,
      content: {
        title: '',
        message: '',
        type: '',
      },
    });
  }

  return (
    <div>
      <Modal open={modalIsOpen} onClose={handleCloseCart}>
        <Cart closeCart={handleCloseCart} toSubmitOrder={handleToSubmitOrder} />
      </Modal>
      <Modal open={formIsOpen} onClose={handleCloseForm}>
        <SubmitOrderForm closeForm={handleCloseForm} showNotification={handleShowNotification} />
      </Modal>
      <Modal open={notification.isShowing} onClose={handleCloseNotification}>
        <Notification {...notification.content} closeNotification={handleCloseNotification} />
      </Modal>

      <Header toggleCart={handleToggleCart} />

      <Meals />
    </div>
  );
}
