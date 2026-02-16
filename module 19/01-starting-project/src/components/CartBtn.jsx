export default function CartBtn({ cartAmount, toggleCart }) {
  return (
    <button className="header__cart cart text-button" onClick={toggleCart}>
      Cart ({cartAmount})
    </button>
  )
}