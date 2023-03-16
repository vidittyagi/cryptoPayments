import { configureStore } from "@reduxjs/toolkit";
import { login } from "./redux/services/loginApi";
import { signup } from "./redux/services/signupApi";

export const store = configureStore({
  reducer: {
    [login.reducerPath]: login.reducer,
    [signup.reducerPath]: signup.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(login.middleware, signup.middleware),
});
