import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  message: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload.user;
      state.loading = false;
      state.message = action.payload.message;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    logOut: (state) => {
      state.currentUser = null;
      state.message = null;
      state.loading = false;
    },
  },
});
export const { signInStart, signInSuccess, signInFailure, logOut } =
  userSlice.actions;
export default userSlice.reducer;
