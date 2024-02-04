import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { apiLogoutUser } from '../../services/api';
import {
  selectAuthUserData,
  selectAuthIsLoading,
} from '../../redux/User/userSlice.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());
  const userEmail = userData?.email ?? "Could't get user email";
  return (
    <div className={css.userMenuContainer}>
      <p className={css.userMenuMail}>{userEmail}</p>
      <button
        className={css.userMenuButton}
        onClick={handleLogOut}
        disabled={isLoading}
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export { UserMenu };
