import { Navigation } from 'components';
import {UserMenu} from 'components';
import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { Navigation } from 'react-router-dom';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <header className={css.header}>
        <Navigation></Navigation>
        <UserMenu></UserMenu>
      </header>
      <main>{children}</main>
    </div>
  );
};
export { Layout };
