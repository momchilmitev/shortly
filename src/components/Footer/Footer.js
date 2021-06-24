import './Footer.scss';
import logo from '../../assets/images/logo.svg';
import facebookIcon from '../../assets/icons/icon-facebook.svg';
import twitterIcon from '../../assets/icons/icon-twitter.svg';
import pinterestIcon from '../../assets/icons/icon-pinterest.svg';
import instagramIcon from '../../assets/icons/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__logo">
        <img src={logo} alt="app logo" />
      </section>
      <nav className="footer__navigation--features">
        <h4 className="footer__header">Features</h4>
        <li className="footer__link">Link Shortening</li>
        <li className="footer__link">Branded Links</li>
        <li className="footer__link">Analytics</li>
      </nav>
      <nav className="footer__navigation--resources">
        <h4 className="footer__header">Resources</h4>
        <li className="footer__link">Blog</li>
        <li className="footer__link">Developers</li>
        <li className="footer__link">Support</li>
      </nav>
      <nav className="footer__navigation--company">
        <h4 className="footer__header">Company</h4>
        <li className="footer__link">About</li>
        <li className="footer__link">Our Team</li>
        <li className="footer__link">Careers</li>
        <li className="footer__link">Contact</li>
      </nav>
      <section className="footer__socials">
        <img src={facebookIcon} alt="facebook icon" />
        <img src={twitterIcon} alt="twitter icon" />
        <img src={pinterestIcon} alt="pinterest icon" />
        <img src={instagramIcon} alt="instagram icon" />
      </section>
    </footer>
  );
};

export default Footer;
