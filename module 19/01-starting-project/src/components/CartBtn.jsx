import { useContext } from "react";
import { CartContext } from "../store/CartContext";

export default function CartBtn({ toggleCart }) {
  const { cartLength } = useContext(CartContext);

  return (
    <button className="header__cart cart text-button" onClick={toggleCart}>
      Cart ({cartLength})
    </button>
  );
}
