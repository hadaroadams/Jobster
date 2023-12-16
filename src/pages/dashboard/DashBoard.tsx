import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/DashBoard"
import Header from "../../components/Header"
import SideNav from "../../components/SideNav"
import {useSelector,useDispatch} from 'react-redux'
import { RootState } from "../../store"

const DashBoard = () => {
  const {number} = useSelector((state:RootState)=> state.users)
  console.log(number)
  return (
    <Wrapper>
      <SideNav/>
      <div className="dashHeaderContDiv">
        <Header/>
        <div className="outletDiv w-full h-[86vh] border-2 border-gray-200">
          <Outlet/>
        </div>
      </div>
    </Wrapper>
  )
}

export default DashBoard
