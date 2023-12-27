import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { useDispatch } from "react-redux";
import jobSlice from "./features/jobs/JobSlice";

export const store = configureStore({
    reducer:{
        users : userSlice,
        job: jobSlice,
    }
})

export type RootState = ReturnType <typeof store.getState>

export const useAppDispatch:()=>typeof store.dispatch = useDispatch
export type AppDispatch = typeof store.dispatch




