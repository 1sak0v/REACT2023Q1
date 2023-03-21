import { Link, Outlet } from 'react-router-dom';

import Nav from '../nav/Nav';

import './header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <h1>
              <Link to="/" className="nav__link">
                Logo
              </Link>
            </h1>
            <Nav />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
