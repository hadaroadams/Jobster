import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import { loginThunk, registrationThunk } from "./userThunk";
import { State } from "../../components/Forms";
import { addToLocalstorage } from "../../utilities/localstorage";
import { Flag } from "@mui/icons-material";

interface UsersIntialValue {
  isLoading: boolean;
  isSideBarOpen:boolean;
  user: {} | null;
}

interface ApiCall {
  message: string;
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
    return loginThunk('auth/login',user, thunkApi) 
  }
);
const initialState: UsersIntialValue = {
  isLoading: false,
  isSideBarOpen:false,
  user: null,
};

export const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    toggleSide: (state) => {
      console.log(current(state));
      state.isSideBarOpen=!state.isSideBarOpen
    },
    logOutUser:(state)=>{
        state.user=null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, user) => {
        state.isLoading = true;
        // console.log(console.log(user));
      })
      .addCase(registerUser.fulfilled, (state, user) => {
        state.isLoading = false;
        console.log(user);
        state.user = user.payload;
        addToLocalstorage(state.user!);
        console.log("fulFilled");
      })
      .addCase(registerUser.rejected, (state, user) => {
        state.isLoading = false;
        console.log("rejected");
      })
      .addCase(loginUser.pending, (state, user) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, user) => {
        state.user = user.payload;
        state.isLoading=false;
      })
      .addCase(loginUser.rejected,(state,user)=>{
        state.isLoading = false;
      })
    // .addCase(register.)
  },
});

export const { toggleSide,logOutUser } = userSlice.actions;
export default userSlice.reducer;
