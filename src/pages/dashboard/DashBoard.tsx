import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/DashBoard"
import Header from "../../components/Header"
import SideNav from "../../components/SideNav"

const DashBoard = () => {
  return (
    <Wrapper>
      <SideNav/>
      <div className="dashHeaderContDiv">
        <Header/>
        
        <Outlet/>
      </div>
    </Wrapper>
  )
}

export default DashBoard
