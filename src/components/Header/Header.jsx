// React
import { Outlet, NavLink } from 'react-router-dom';

// Components
import Logo from '../Logo/Logo';

// Styles
import s from './Header.module.scss';

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.headerWrapper}>
          <Logo />
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.nav_link)}
            >
              All products
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Header;
