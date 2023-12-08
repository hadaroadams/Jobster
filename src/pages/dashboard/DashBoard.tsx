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
        <div className=" outletDiv w-full h-[86vh] border-2 border-gray-200">
          <Outlet/>
        </div>
      </div>
    </Wrapper>
  )
}

export default DashBoard
