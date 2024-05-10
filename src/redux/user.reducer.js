import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
  token: "",
  userDetails: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.token = action.payload.auth_token;
      state.userDetails = {
        firstName: action.payload.first_name,
        surName: action.payload.sur_name,
        email: action.payload.email,
        phone: action.payload.phone
      };
    },
    logout: (state) => {
      state.loggedIn = false;
      state.token = "";
      state.userDetails = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
