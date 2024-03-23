import './Header.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="logo">
        Logo
      </div>
      <div className={`navbar ${showMenu ? 'navbar__mobile' : ''}`}>
        <ul className="navbar__list">
          <li ><NavLink className="navbar__item" to={"/"}>Home</NavLink></li>
          <li ><NavLink className="navbar__item" to={"/"}>Books</NavLink></li>
          <li ><NavLink className="navbar__item" to={"/"}>My Reviews</NavLink></li>
        </ul>
      </div>
      <div className="login">
        <NavLink className="login__link" to={"/"}>Login</NavLink>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>&#9776;</div>
    </div>
  );
};

export default Header;
