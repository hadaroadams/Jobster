import JosterLogo from "../assets/JobsterLogo.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SegmentIcon from '@mui/icons-material/Segment';
import Wrapper from "../assets/wrappers/Header";

const Header = () =>{
  return (
    <Wrapper>
            <div className="menuBtn">
                <button><SegmentIcon/></button>
            </div>
            <div>
                <img src={JosterLogo} alt="" />
            </div>
            <div>
                <h1>DashBoard</h1>
            </div>
            
            <div>
                <button>
                    <AccountCircleIcon/>
                        Hadaro
                    <ArrowDropDownIcon/>
                </button>
            </div>
    </Wrapper>
  )
}

export default Header
