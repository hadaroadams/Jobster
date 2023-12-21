import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { registrationThunk } from "./userThunk";
import { State } from "../../pages/Register";
import { GetThunkAPI } from "@reduxjs/toolkit/dist/createAsyncThunk";

interface UsersIntialValue {
  number: number;
}

interface ApiCall {
  message: string;
}

export const register = createAsyncThunk(
  "users",
  async (user: State, thunkApi) => {
    return registrationThunk(user,thunkApi);
  }
);

const initialState: UsersIntialValue = {
  number: 2,
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addSomething: (state) => {
      state.number += 1;
      console.log("something");
      console.log(current(state));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state, users) => {
        state.number = 100;
        console.log("pending");
      })
      .addCase(register.fulfilled, (state, users) => {
        console.log("fulFilled");
      })
      .addCase(register.rejected, (state, users) => {
        console.log("rejected");
      });
    // .addCase(register.)
  },
});

export const { addSomething } = userSlice.actions;

export default userSlice.reducer;
