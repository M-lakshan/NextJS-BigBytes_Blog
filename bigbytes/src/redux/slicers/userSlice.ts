import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unm: "guest",
  sts: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.unm = action.payload; 
      state.sts = true;
    },
    logout(state) {
      state.unm = "guest";
      state.sts = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;