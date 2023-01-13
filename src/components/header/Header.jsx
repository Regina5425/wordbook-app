import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <ul className='header__list'>
        <li className='header__item'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </li>
        <li className='header__item'>
          <Link to='/' className='header__btn'>
            Главная
          </Link>
        </li>
        <li className='header__item'>
          <Link to='/dictionary' className='header__btn'>
            Словарь
          </Link>
        </li>
        <li className='header__item'>
          <Link to='/training' className='header__btn'>
            Тренировка
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
