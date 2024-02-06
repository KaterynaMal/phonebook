import { Navigation, UserMenu } from 'components';
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
      <header className={css.header}>
        <Navigation></Navigation>
        {isLoggedIn && <UserMenu></UserMenu>}
      </header>
      <main className={css.mainContainer}>
        <ToastContainer position="top-center"/>
        {!isLoggedIn && (
          <p className={css.title}>
            To see your contacts, please login or register!
          </p>
        )}
        {children}
      </main>
    </div>
  );
};
export { Layout };
