import { Navigation } from 'components';
import { UserMenu } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/User/userSlice.selectors';
// import { NavLink } from 'react-router-dom';
// import { Navigation } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <div>
      <header className={css.header}>
        <Navigation></Navigation>
        {isLoggedIn && <UserMenu></UserMenu>}
      </header>
      <main>{children}</main>
    </div>
  );
};
export { Layout };
