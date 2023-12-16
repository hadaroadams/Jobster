import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
    reducer:{
        users : userSlice
    }
})

export type RootState = ReturnType <typeof store.getState>

