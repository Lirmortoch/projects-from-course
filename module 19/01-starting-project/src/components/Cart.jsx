export default function Cart({ cart, handleAddAmountOfItem, handleSubtractAmountOfItem, toggleCart }) {
  const cartTotal = cart.reduce((acc, item) => acc + (item.amount * item.meal.price), 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <ul>
        { cart.map(item => {
          return (
            <li key={item.meal.id} className="cart-item">
              <p>{item.meal.name} - {item.amount} x {item.meal.price}</p>

              <div className="cart-item-actions">
                <button onClick={() => handleSubtractAmountOfItem(item)}>-</button>

                <span>{item.amount}</span>

                <button onClick={() => handleAddAmountOfItem(item)}>+</button>
              </div>
            </li>
          )
        }) }
      </ul>

      <p className="cart-total">${cartTotal}</p>

      <div className="modal-actions">
        <button onClick={toggleCart} className="text-button">Close</button>
        <button className="button">Go to Checkout</button>
      </div>
    </div>
  );
}