import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
  return (
    <header className='header'>
      <ul className='header__list'>
        <li className='header__item'>
          <a href='www.google.com'>
            <img src={logo} alt='logo' className='logo' />
          </a>
        </li>
        <li className='header__item'>
          <button className="header__btn">Главная</button>
        </li>
        <li className='header__item'>
          <button className='header__btn'>Словарь</button>
        </li>
        <li className='header__item'>
          <button className='header__btn'>Тренировка</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
