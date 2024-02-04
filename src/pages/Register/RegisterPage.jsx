import React from 'react';
import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../services/api';
import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

       const formData = {
      name,
      email,
      password,
       };
    
    dispatch(apiRegisterUser(formData));
}

  return (
    <div>
      <h1 className={css.submitTitle}>RegisterPage</h1>

      <form onSubmit={onSubmit} className={css.submitForm}>
        <label className={css.label}>
          Name:
          <input className={css.input}
            type="text"
            name="userName"
            placeholder="Kirito"
            minLength={2}
            required
          />
        </label>
        <label className={css.label}>
          Email:
          <input className={css.input}
            type="email"
            name="userEmail"
            placeholder="kirito228@hotmail.ua"
            required
          />
        </label>
        <label className={css.label}>
          Password:
          <input className={css.input}
            type="password"
            name="userPassword"
            placeholder="**********"
            minLength={7}
            required
          />
        </label>
        <button type="submit" className={css.btn}>Sign Up</button>
      </form>
    
    </div>
  )
}

export  default RegisterPage ;
