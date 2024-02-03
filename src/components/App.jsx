import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigations/Navigation';

const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));

export const App = () => {
  return (
    <Navigation>
      <Routes>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Routes>
    </Navigation>
  );
};

// <div className={css.form_container}>
//   <h1>Phonebook</h1>

//   <ContactForm></ContactForm>
//   <h2>Contacts</h2>
//   <Filter></Filter>
//   <ContactList></ContactList>
// </div>
