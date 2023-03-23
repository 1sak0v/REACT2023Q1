import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => {
  const activeClass = (isActive: boolean) =>
    isActive ? 'nav__link nav__link_active' : 'nav__link';

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <NavLink to="/" className={({ isActive }) => activeClass(isActive)}>
            Home
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/about" className={({ isActive }) => activeClass(isActive)}>
            About
          </NavLink>
        </li>
        <li className="nav__list-item">
          <NavLink to="/form" className={({ isActive }) => activeClass(isActive)}>
            Form
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
