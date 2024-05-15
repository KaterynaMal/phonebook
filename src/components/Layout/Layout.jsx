// import { Navigation, UserMenu } from 'components';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/User/userSlice.selectors';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div className={css.container}>
      {/* <header className={css.header}>
        <Navigation></Navigation>
        {isLoggedIn && <UserMenu></UserMenu>}
      </header> */}
      <main className={css.mainContainer}>
        <ToastContainer position="top-center"/>
        {!isLoggedIn && (
          <p className={css.title}>
            Wellcome to phone book app! <br></br>
            
            To see your contacts, please 
            <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${css.login} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            <span> login </span>
          </NavLink>
             or 
            <NavLink
            className={({ isActive }) =>
              `${css.navLink} ${css.register} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            <span> register</span>
          </NavLink>
          </p>
          
        )}
        {children}
      </main>
    </div>
  );
};
export { Layout };
