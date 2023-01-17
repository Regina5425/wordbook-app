import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <ul className='footer__list'>
        <li className='footer__item'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </li>
        <li className='footer__item'>
          <a href='mailto:reina5425@gmail.com' className='footer__link'>
            Связаться
          </a>
        </li>
        <li className='footer__item'>
          &copy;
          <a
            href='https://github.com/Regina5425'
            target='_blank'
            rel='noopener noreferrer'
						className='footer__link'
          >
            by Regina
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
