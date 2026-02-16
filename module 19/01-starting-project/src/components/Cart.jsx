import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function Cart({ closeCart, toSubmitOrder }) {
  const { cart, cartPrice, addAmountOfItem, subtractAmountOfItem } = useContext(CartContext);

  const checkoutBtnClassName = `button${cart.length < 1 ? ' disabled' : ''}`;

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <ul>
        {cart.map((item) => {
          return (
            <li key={item.meal.id} className="cart-item">
              <p>
                {item.meal.name} - {item.amount} x {item.meal.price}
              </p>

              <div className="cart-item-actions">
                <button onClick={() => subtractAmountOfItem(item)}>
                  -
                </button>

                <span>{item.amount}</span>

                <button onClick={() => addAmountOfItem(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="cart-total">${cartPrice}</p>

      <div className="modal-actions">
        <button onClick={closeCart} className="text-button">
          Close
        </button>
        
        <button className={checkoutBtnClassName} disabled={cart.length < 1} onClick={toSubmitOrder}>Go to Checkout</button>
      </div>
    </div>
  );
}
