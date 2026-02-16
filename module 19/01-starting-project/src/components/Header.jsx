import logo from '../assets/logo.jpg';

import CartBtn from './CartBtn';

export default function Header({ cartAmount }) {
  return (
    <header className='header' id='main-header'>
      <h1 className='header__title title' id='title'>
        <img src={logo} alt='React Food App Logo' className='header__logo header-logo' />
        Reactfood
      </h1>

      <CartBtn cartAmount={cartAmount}/>
    </header>
  );
}