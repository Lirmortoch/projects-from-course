// We can send logo with props, this allow us change logo if we need it
// But I used 'import' right in Header component

import Logo from '/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id="header" className="header">
            <div className="header__logo logo">
                <img src={Logo} alt="" className="logo__image"/>
            </div>
            <h1 className="header__title title">Investment Calculator</h1>
        </header>
    );
}