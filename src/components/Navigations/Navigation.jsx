import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/User/userSlice.selectors';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.navigation}>
      {isLoggedIn ? (
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${css.contacts} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          {/* Contacts */}
        </NavLink>
      ) : 
      (
        <div className={css.loginRegisterContainer}>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${css.login} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${css.register} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            Register
          </NavLink>
        </div>
      )}
    </div>
  );
};
export { Navigation };
