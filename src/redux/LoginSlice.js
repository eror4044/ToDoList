import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginForm",
  initialState: {
    login: "",
    password: "",
    isLoggedIn: false, 
  },
  reducers: {
    setLogin(state, action) {
      state.login = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setIsLogged(state, action) {
      state.isLoggedIn = action.payload;
    },
    logout(state) {
      state.login = "";
      state.password = "";
      state.isLoggedIn = false; 
    },
  },
});

export const { setLogin, setPassword,setIsLogged, logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
