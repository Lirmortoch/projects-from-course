export default function Cart({ cart, handleAddAmountOfItem, handleSubtractAmountOfItem }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>

      <ul>
        { cart.map(item => {
          return (
            <li key={item.meal.id} className="cart-item">
              <p>{item.meal.name} - {item.amount} x {item.meal.price}</p>

              <div className="cart-item-action">
                <button onClick={() => handleSubtractAmountOfItem(item)}>-</button>
                
                <span>{item.amount}</span>

                <button onClick={() => handleAddAmountOfItem(item)}>+</button>
              </div>
            </li>
          )
        }) }
      </ul>
    </div>
  );
}