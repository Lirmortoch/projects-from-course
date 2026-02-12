import { useState } from "react"

export default function Cart({}) {
  const [cart, setCart] = useState([]);

  return (
    <button className="header__cart cart text-button">
      Cart ({cart.length})
    </button>
  )
}