import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { Loader } from 'Loader';

const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        </Routes>
        </Suspense>
    </Layout>
  );
}

export { App };


