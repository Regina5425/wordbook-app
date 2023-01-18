import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const onBurgerClick = () => {
    setActive(!active);
  };

  return (
    <header className='header'>
      <ul className='header__list'>
        <li className='header__item'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' />
          </Link>
        </li>
        <li className='header__title'>
          <ul className={active ? 'header__title-block header__title-block--visible' : 'header__title-block'}>
            <li className='header__item burger-menu__item'>
              <Link to='/' className='header__btn' onClick={onBurgerClick}>
                Главная
              </Link>
            </li>
            <li className='header__item burger-menu__item'>
              <Link to='/dictionary' className='header__btn' onClick={onBurgerClick}>
                Словарь
              </Link>
            </li>
            <li className='header__item burger-menu__item'>
              <Link to='/training' className='header__btn' onClick={onBurgerClick}>
                Тренировка
              </Link>
            </li>
          </ul>
        </li>
        <li className='header__item header__item--burger'>
          <button className={active ? 'burger burger--active' : 'burger'} onClick={onBurgerClick}>
            <span className='burger__line'></span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
