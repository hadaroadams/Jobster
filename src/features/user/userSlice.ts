import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { logOutThunk, loginThunk, registrationThunk, upDateThunk } from "./userThunk";
import { State } from "../../components/Forms";
import {
  addToLocalstorage,
  getUserFromLocalStorage,
} from "../../utilities/localstorage";
import { UserData } from "../../components/ProfileMain";

interface UsersIntialValue {
  isLoading: boolean;
  isSideBarOpen: boolean;
  user: {
    email: string;
    lastName: string;
    location: string;
    name: string;
    token: string;
  } | null;
}


export const registerUser = createAsyncThunk(
  "user/register",
  async (user: State, thunkApi) => {
    console.log(user);
    return registrationThunk("auth/register", user, thunkApi);
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (user: State, thunkApi) => {
    return loginThunk("auth/login", user, thunkApi);
  }
);

export const upDateUser = createAsyncThunk(
  "user/update",
  async (user: UserData<string>, thunkApi) => {
    return upDateThunk("/auth/updateUser", user, thunkApi);
  }
);
export const  clearStore = createAsyncThunk('user/clearStore',async(message:string,thunkApi) => logOutThunk(message,thunkApi))
const initialState: UsersIntialValue = {
  isLoading: false,
  isSideBarOpen: false,
  user: getUserFromLocalStorage(),
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    toggleSide: (state) => {
      console.log(current(state));
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    logOutUser: (state) => {
      localStorage.removeItem('user')
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        // console.log(console.log(user));
      })
      .addCase(registerUser.fulfilled, (state, user) => {
        state.isLoading = false;
        console.log(user);
        state.user = user.payload.data.user;
        addToLocalstorage(state.user!);
        console.log("fulFilled");
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        console.log("rejected");
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, user) => {
        state.user = user.payload.data.user;
        addToLocalstorage(state.user!);
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(upDateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(upDateUser.fulfilled, (state, user) => {
        state.isLoading = false;
        state.user = user.payload.data.user;
        addToLocalstorage(state.user!);
      })
      .addCase(upDateUser.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleSide, logOutUser } = userSlice.actions;
export default userSlice.reducer;
