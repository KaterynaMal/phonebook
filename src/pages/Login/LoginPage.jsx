import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../services/api';
import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
  };

  return (
    <div>
      <h1 className={css.submitTitle}>LoginPage</h1>

      <form onSubmit={onSubmit} className={css.submitForm}>
        <label className={css.label}>
          Email:
          <input
            className={css.input}
            type="email"
            name="userEmail"
            placeholder="kirito228@hotmail.ua"
            required
          />
        </label>
        <label className={css.label}>
          Password:
          <input
            className={css.input}
            type="password"
            name="userPassword"
            placeholder="**********"
            minLength={7}
            required
          />
        </label>
        <button type="submit" className={css.btn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
