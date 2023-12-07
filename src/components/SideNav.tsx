import Wrapper from "../assets/wrappers/SideNav"
import Logo from '../assets/JobsterLogo.svg'
import Links from "./Links"
const SideNav = () => {
  return (
    <Wrapper>
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
