// import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/User/userSlice.selectors';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    return (
        <div className={css.navigation}>
           {/* <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home 
         </NavLink> */}
        {isLoggedIn ? (
<NavLink
          className={({ isActive }) =>
            `${css.navLink} ${css.contacts} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          
          Contacts
        </NavLink>
        ) : (
             <div className={css.loginRegisterContainer}>
  <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${css.loginRegister} ${isActive ? css.active : ''}`
          }
          to="/login"
        >
          Login
                </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${css.navLink} ${css.loginRegister} ${isActive ? css.active : ''}`
          }
          to="/register"
        >
          Register
                </NavLink>
        </div>
        )
        
      } 
         
       
      
                 
                
        </div>
    )
};
export { Navigation };
