export default function CartBtn({ cartAmount }) {
  return (
    <button className="header__cart cart text-button">
      Cart ({cartAmount})
    </button>
  )
}