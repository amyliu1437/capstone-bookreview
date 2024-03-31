import './Header.scss';
import { useState, useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import Avatar from '../Avatar/Avatar';
import logoImage from '../../assets/Image/logo-with-bg.png'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  return (
    <div className="header-container">
      <div className="header">
        <div className="logo">
          <NavLink className="logo__item" to={"/"}>
            <img className="logo__image" src={logoImage} alt="logo.png" />
          </NavLink>
        </div>
        <div className={`navbar ${showMenu ? 'navbar-mobile' : ''}`}>
          <ul className="navbar__list">
            <li >
              <NavLink className="navbar__item" to={"/"}>
                Home
              </NavLink>
            </li>
            <li >
              <NavLink className="navbar__item" to={"/books"}>
                Books
              </NavLink>
            </li>
            {user && <li >
              <NavLink className="navbar__item" to={`/users/${user.id}/reviews`}>
                My Reviews
              </NavLink>
            </li>}
            {!user && <li >
              <NavLink className="navbar__item" to={"/login"}>
                My Reviews
              </NavLink>
            </li>}
          </ul>
        </div>
        <div className="function-bar">
          <div className="menu" >
            <div className="menu__items">
              {user &&<Avatar name={user.name} />}
              {user &&
                <div className="menu__link">
                <span className="menu__link--button" onClick={handleLogout}>
                  Logout
                </span>
                </div>}
            </div>
            {!user &&
              <NavLink className="menu__link" to={"/login"}>
                Login
              </NavLink>}
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>&#9776;</div>
        </div>
      </div>
    </div>

  );
};

export default Header;
