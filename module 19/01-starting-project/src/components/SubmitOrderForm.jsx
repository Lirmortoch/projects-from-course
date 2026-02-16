import { useContext, useActionState } from "react";

import { CartContext } from "../store/CartContext";
import { OrdersContext } from "../store/OrdersContext";

function Control({ label, type, name }) {
  return (
    <fieldset className="control">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} />
    </fieldset>
  );
}

export default function SubmitOrderForm({ closeForm, showNotification }) {
  const { cart, cartPrice, clearCart } = useContext(CartContext);
  const { createNewOrder } = useContext(OrdersContext);

  async function handleSubmitForm() {
      
  }

  return (
    <div className="cart">
      <h2>Checkout</h2>

      <p>Total Amount: ${cartPrice}</p>

      <form>
        <Control label={'Full Name'} type={'text'} name={'full-name'} />
        <Control label={'E-Mail Address'} type={'email'} name={'e-mail'} />
        <Control label={'Street'} type={'text'} name={'street'} />

        <div className="control-row">
          <Control label={'Postal Code'} type={'number'} name={'postal-code'} />
          <Control label={'City'} type={'text'} name={'city'} />
        </div>
      </form>

      <div className="modal-actions">
        <button onClick={closeForm} className="text-button">
          Close
        </button>

        <button className='button'>Submit Order</button>
      </div>
    </div>
  );
}