import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/redux/slicers/userSlice";
import blogReducer from "@/redux/slicers/blogSlice";
import moduleReducer from "@/redux/slicers/moduleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    development: moduleReducer,
    blog: blogReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;