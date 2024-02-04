import React from 'react';
import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.userMenuContainer}>
  <p className={css.userMenuMail}>mango@mail.com</p>
  <button className={css.userMenuButton}>Logout</button>
</div>
  )
}

export {UserMenu};