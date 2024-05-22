import { UserMenu, Navigation } from 'components';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../../redux/User/userSlice.selectors';
import { Section } from 'components';
import { Container } from 'components';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <Section className={css.section}>
      <Container className={css.container}>
        <header className={css.header}>
          <Navigation></Navigation>
          {isLoggedIn && <UserMenu></UserMenu>}
        </header>
        <main className={css.mainContainer}>
          <ToastContainer position="top-center" />
          {!isLoggedIn && (
            <div>
              <h1 className={css.title}>Wellcome to phone book app! </h1>

              <p>
                <span className={css.spanTitle}>
                  To see your contacts:
                  <br></br>
                  <NavLink
                    className={({ isActive }) =>
                      `${css.navLink} ${css.login} ${
                        isActive ? css.active : ''
                      }`
                    }
                    to="/login"
                  >
                    <span className={css.navlink}> login </span>
                  </NavLink>
                  or
                  <NavLink
                    className={({ isActive }) =>
                      `${css.navLink} ${css.register} ${
                        isActive ? css.active : ''
                      }`
                    }
                    to="/register"
                  >
                    <span className={css.navlink}> register</span>
                  </NavLink>
                </span>
              </p>
            </div>
          )}
          {children}
        </main>
      </Container>
    </Section>
  );
};
export { Layout };
