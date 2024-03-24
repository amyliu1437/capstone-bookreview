import './Header.scss';
import { useState, useEffect,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, setUser } = useContext(UserContext);
  
  const handleLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    // console.log("Search from localStorage: "+loggedInUser);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

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
          <li ><NavLink className="navbar__item" to={"/books"}>Books</NavLink></li>
          {user && <li ><NavLink className="navbar__item" to={`/users/${user.id}/reviews`}>My Reviews</NavLink></li>}
          {!user && <li ><NavLink className="navbar__item" to={"/login"}>My Reviews</NavLink></li>}
        </ul>
      </div>
      <div className="login">
        {user && <NavLink className="navbar__item">{user.name}</NavLink>}
        {user && <NavLink className="login__link" onClick={handleLogout}>Logout</NavLink>}
        {!user && <NavLink className="login__link" to={"/login"}>Login</NavLink>}
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>&#9776;</div>
    </div>
  );
};

export default Header;
