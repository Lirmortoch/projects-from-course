import logo from '../assets/logo.jpg';

import Cart from './Cart';

export default function Header({ cart }) {
  return (
    <header className='header' id='main-header'>
      <h1 className='header__title title' id='title'>
        <img src={logo} alt='React Food App Logo' className='header__logo header-logo' />
        Reactfood
      </h1>

      <Cart cart={cart}/>
    </header>
  );
}