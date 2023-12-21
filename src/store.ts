import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
        users : userSlice
    }
})

export type RootState = ReturnType <typeof store.getState>

export const useAppDispatch:()=>typeof store.dispatch = useDispatch
export type AppDispatch = typeof store.dispatch




