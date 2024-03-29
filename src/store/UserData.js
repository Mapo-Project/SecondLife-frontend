import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    login: false,
    data: null,
  },
  reducers: {
    SET_USER: (state, action) => {
      state.login = true;
      state.data = action.payload;
      console.log("회원정보 저장소: ", state.data);
    },
    DELETE_USER: (state) => {
      state.login = false;
      state.data = null;
      console.log("회원정보 저장소: ", state.data);
    },
  },
});

export const { SET_USER, DELETE_USER } = userSlice.actions;

export default userSlice.reducer;
