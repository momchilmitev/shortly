import './NavBar.scss';

import logo from '../../assets/images/logo.svg';
import hamburger from '../../assets/icons/icon-hamburger.svg';

const NavBar = () => {
  return (
    <nav>
      <img className="navigation__logo" src={logo} alt="logo" />
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
        <button className="btn--primary">Sign Up</button>
      </section>
      <img src={hamburger} alt="mobile navigation icon" />
    </nav>
  );
};

export default NavBar;
