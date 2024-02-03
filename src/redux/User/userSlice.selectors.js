export const selectAuthToken = state => state.user.token;
export const selectAuthUserData = state => state.user.userData;
export const selectAuthIsLoggedIn = state => state.user.isLoggedIn;
export const selectAuthError = state => state.user.error;
export const selectAuthIsLoading = state => state.user.isLoading;