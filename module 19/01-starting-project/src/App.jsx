import { useState } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";
import Modal from "./components/Modal";

export default function App({}) {
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <Modal open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <>

        </>
      </Modal>

      <Header cart={cart}/>

      <Meals />
    </div>
  );
}