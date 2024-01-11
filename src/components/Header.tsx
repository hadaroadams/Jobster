import JosterLogo from "../assets/JobsterLogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Wrapper from "../assets/wrappers/Header";
import { useSelector } from "react-redux";
import { toggleSide, logOutUser, clearStore } from "../features/user/userSlice";
import { RootState, useAppDispatch } from "../store";
import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { logOutThunk } from "../features/user/userThunk";

interface InitialState {
  name: string;
  email: string;
  password: string;
  isMember: boolean;
}

const initialState: InitialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Header = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const user = useSelector((state: RootState) => state.users.user);
  const dispatch = useAppDispatch();
  // console.log(state.users.isSideBarOpen)
  return (
    <Wrapper>
      <div className="menuBtn">
        <button
          onClick={() => {
            dispatch(toggleSide());
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className="logoDiv">
        <img src={JosterLogo} alt="" />
      </div>
      <div className="pageName">
        <h1>DashBoard</h1>
      </div>
      <div className="testUserBtn">
        <button
          className="userButton"
          onClick={() => {
            setToggleButton(!toggleButton);
          }}
        >
          <AccountCircleIcon />
          <span>{user?.name}</span>
          <ArrowDropDownIcon />
        </button>
        {toggleButton && (
          <button
            className="logOutBtn"
            onClick={() => {
              console.log('log')
              dispatch(clearStore('Logged Out Successfully'))
            }}
          >
            Logout
          </button>
        )}
      </div>
    </Wrapper>
  );
};

export default Header;
