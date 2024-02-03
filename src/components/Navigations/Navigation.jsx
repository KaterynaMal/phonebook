// import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
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
        </div>
    )
};
export { Navigation };
