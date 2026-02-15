export default function Cart({ cart }) {
  return (
    <button className="header__cart cart text-button">
      Cart ({cart.length})
    </button>
  )
}