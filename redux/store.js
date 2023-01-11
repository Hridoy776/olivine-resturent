import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth/authSlice";
import counterSlice from "./slices/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        authSlice:authSlice,
    }
})
export default store;