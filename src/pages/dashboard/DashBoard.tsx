import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/DashBoard"
import Header from "../../components/Header"
import SideNav from "../../components/SideNav"
import BigSideNav from "../../components/BigSideNav"

const DashBoard = () => {
  // const {isLoading,isSideBarOpen} = useSelector((state:RootState)=> state.users)
//  console.log(isLoading)
  return (
    <Wrapper>
      <SideNav/>
      <BigSideNav/>
      <div className={`dashHeaderContDiv`}>
        <Header/>
        {/* {isLoading && (<><div className="w-10 h-10 bg-red-400"></div></>)} */}
        <div className="outletDiv w-full border-2 border-gray-200">
          <Outlet/>
        </div>
      </div>
    </Wrapper>
  )
}

export default DashBoard
