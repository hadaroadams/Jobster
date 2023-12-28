import JosterLogo from "../assets/JobsterLogo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Wrapper from "../assets/wrappers/Header";
import { useSelector } from "react-redux";
import { toggleSide, logOutUser } from "../features/user/userSlice";
import { RootState, useAppDispatch } from "../store";
import axios from "axios";
import { useState } from "react";

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
  const state = useSelector((state: RootState) => state);
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
          <span>Hadaro</span>
          <ArrowDropDownIcon />
        </button>
        {toggleButton && (
          <button
            className="logOutBtn"
            onClick={() => {
              dispatch(logOutUser());
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
