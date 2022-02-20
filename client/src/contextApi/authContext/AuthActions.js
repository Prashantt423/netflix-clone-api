export const loginStart = () => ({
  type: 'LOGIN_START',
});
export const loginSuccess = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const loginFailure = () => ({
  type: 'LOGIN_FAILURE',
});
export const getUsersStart = () => ({
  type: 'GET_USERS_START',
});
export const getUsersSuccess = (users) => ({
  type: 'GET_USER_SUCCESS',
  payload: users,
});
export const getUsersFailure = () => ({
  type: 'GET_USER_ERROR',
});

//logout

export const logout = () => ({
  type: 'LOGOUT',
});
