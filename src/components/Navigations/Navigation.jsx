import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = ({ children }) => {
    return (
        <div>
           <header className={css.header}>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          {/* Home */}
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/register"
        >
          Register
                </NavLink>
                 <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/login"
        >
          Login
                </NavLink>
                 <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
                </NavLink>
                <UserMenu></UserMenu>
      </header>
      <main>{children}</main>
        </div>
    )
};
export { Navigation };
