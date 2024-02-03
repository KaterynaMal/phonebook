import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { apiRegisterUser, apiLoginUser, apiRefreshUser } from 'services/api';


const initialState = {
  token: null,
  userData: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
    initialState,
  extraReducers: builder =>
    builder
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userData = action.payload;
      })

      .addMatcher(
        isAnyOf(
          apiRegisterUser.pending,
          apiLoginUser.pending,
          apiRefreshUser.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiRegisterUser.rejected,
          apiLoginUser.rejected,
          apiRefreshUser.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
  
  
});


export const userReducer = userSlice.reducer;