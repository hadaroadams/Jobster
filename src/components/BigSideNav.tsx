import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/BigSideNav";
import Links from "./Links";
import { RootState, useAppDispatch } from "../store";
import logo from "../assets/JobsterLogo.svg";
import { toggleSide } from "../features/user/userSlice";
const BigSideNav = () => {
  const { isSideBarOpen } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  return (
    <Wrapper isSideBarOpen={isSideBarOpen}>
      <div className="navContainer">
        <button
          onClick={() => {
            dispatch(toggleSide());
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div>
          <img src={logo} alt="" />
          <Links bigSide />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSideNav;
