import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1>
            <NavLink to="/" className="nav__link">
              Logo
            </NavLink>
          </h1>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__list-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link_active' : 'nav__link'
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__list-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'nav__link nav__link_active' : 'nav__link'
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
