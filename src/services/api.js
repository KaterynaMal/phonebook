import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const apiGetContacts = createAsyncThunk(
  'contacts/apiGetContacts',
  async (_, thunkApi) => {
    try {
      const result = await instance.get('/contacts');
      return result.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkApi) => {
    try {
      const contactData = await instance.post('/contacts', newContact);
      return contactData.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkApi) => {
    try {
      await instance.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const setToken = token => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const apiRegisterUser = createAsyncThunk(
  'user/RegisterUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/signup', formData);
      setToken(data.token);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  'auth/apiLoginUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post('/users/login', formData);
      // { user: {name: 'wdawd', email: 'wdawd@gmail.com' }, token: 'wdawd1212dwdwa' }
      setToken(data.token);

      return data;
    } catch (error) {
      thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  'auth/apiRefreshUser',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const token = state.auth.token;
    if (!token) return thunkApi.rejectWithValue("You don't have a token!");
    try {
      setToken(token);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
