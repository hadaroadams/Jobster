import Wrapper from "../assets/wrappers/SideNav"
import Logo from '../assets/JobsterLogo.svg'
import Links from "./Links"
import { useSelector } from "react-redux"
import { RootState } from "../store"
const SideNav = () => {
  const {isSideBarOpen}= useSelector((state:RootState)=>state.users)
  return (
    <Wrapper isSideBarOpen={isSideBarOpen}>
      <div className="sideNavLogoDiv">
        <img src={Logo} alt="" />
      </div>
      <div className="sideNavLinks">
        <Links/>
      </div>
    </Wrapper>
  )
}

export default SideNav
