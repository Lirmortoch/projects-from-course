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

  async function orderAction(prevFormState, formData) {
    const name = formData.get('full-name');
    const email = formData.get('e-mail');
    const street = formData.get('street');
    const postalCode = formData.get('postal-code');
    const city = formData.get('city');

    const order = {
      items: cart,
      customer: {
        email,
        street,
        city,
        name,
        'postal-code': postalCode,
      }
    }

    try {
      await createNewOrder({ order });
      
      showNotification('Success', 'Your order was submitted successfully \n We will get back to you with more details via email within the next few minutes');

      return { errors: null }
    }
    catch(error) {
      showNotification('Error!', `Can't add order!`, 'error');
      return { errors: null }
    }
  }

  const [formState, formAction, isPending] = useActionState(orderAction, { errors: null });

  return (
    <div className="cart">
      <h2>Checkout</h2>

      <p>Total Amount: ${cartPrice}</p>

      <form action={formAction}>
        <Control label={'Full Name'} type={'text'} name={'full-name'} />
        <Control label={'E-Mail Address'} type={'email'} name={'e-mail'} />
        <Control label={'Street'} type={'text'} name={'street'} />

        <div className="control-row">
          <Control label={'Postal Code'} type={'number'} name={'postal-code'} />
          <Control label={'City'} type={'text'} name={'city'} />
        </div>

        <div className="modal-actions">
          <button type="button" onClick={closeForm} className="text-button">
            Close
          </button>

          <button className='button' type="submit">Submit Order</button>
        </div>
      </form>
    </div>
  );
}