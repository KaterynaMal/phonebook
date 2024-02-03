import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// import { apiGetContacts, addContact, deleteContact } from 'services/api';

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

      .addCase(apiGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })

      .addMatcher(
        isAnyOf(
          apiGetContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          apiGetContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});


export const userReducer = userSlice.reducer;