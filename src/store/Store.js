import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "./Auth";
import userReducer from "./UserData";

export default configureStore({
  reducer: {
    token: tokenReducer,
    user: userReducer,
  },
});
