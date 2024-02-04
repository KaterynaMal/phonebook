import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { Loader } from 'Loader';
import { useDispatch} from 'react-redux';
import { apiRefreshUser } from 'services/api';

const RegisterPage = lazy(() => import('pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const ContactsPage = lazy(() => import('pages/Contacts/ContactsPage'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch])


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


