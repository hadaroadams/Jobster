import JosterLogo from "../assets/JobsterLogo.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Wrapper from "../assets/wrappers/Header";

const Header = () =>{
  return (
    <Wrapper>
            <div className="menuBtn">
                <button><i className="fa-solid fa-bars"></i></button>
            </div>
            <div className="logoDiv">
                <img src={JosterLogo} alt="" />
            </div>
            <div className='pageName'>
                <h1>DashBoard</h1>
            </div>
            <div className="testUserBtn">
                <button>
                    <AccountCircleIcon/>
                    <span>
                        Hadaro
                    </span>
                    <ArrowDropDownIcon/>
                </button>
            </div>
    </Wrapper>
  )
}

export default Header
