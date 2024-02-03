import { contactsReducer } from './Contacts/contactsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './User/userSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const userConfig = {
  key: 'user',
    storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: persistReducer(userConfig, userReducer),
  },
});

