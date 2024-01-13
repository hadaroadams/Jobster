import { Outlet, useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashBoard";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import BigSideNav from "../../components/BigSideNav";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const DashBoard = () => {
  const { user } = useSelector((state: RootState) => state.users);
  //  console.log(isLoading)
  const navigate = useNavigate()
 useEffect(()=>{
  console.log(user)
    if(user==null){
       navigate('/landing')
       console.log('hello')
    }
 },[user])
 
  return (
    <Wrapper>
      <SideNav />
      <BigSideNav />
      <div className={`dashHeaderContDiv`}>
        <Header />
        {/* {isLoading && (<><div className="w-10 h-10 bg-red-400"></div></>)} */}
        <div className="outletDiv w-full flex flex-col  items-center border-2 border-gray-200">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashBoard;
