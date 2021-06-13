import './NavBar.scss';
import { useState } from 'react';

import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/icons/icon-hamburger.svg';

const NavBar = () => {
  const [toggleNavClass, setToggleNavClass] = useState(
    'navigation__actions--close',
  );

  const toggleNav = () => {
    toggleNavClass === 'navigation__actions--close'
      ? setToggleNavClass('navigation__actions--open')
      : setToggleNavClass('navigation__actions--close');
  };

  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <section className={`navigation__actions ${toggleNavClass}`}>
        <section className="navigation__links">
          <a className="navigation__link" href="#">
            Features
          </a>
          <a className="navigation__link" href="#">
            Pricing
          </a>
          <a className="navigation__link" href="#">
            Resources
          </a>
        </section>
        <section className="navigation__buttons">
          <button className="btn">Login</button>
          <button className="btn btn--primary">Sign Up</button>
        </section>
      </section>
      <img onClick={toggleNav} src={hamburger} alt="mobile navigation icon" />
    </nav>
  );
};

export default NavBar;
