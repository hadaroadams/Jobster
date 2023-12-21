import JosterLogo from "../assets/JobsterLogo.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Wrapper from "../assets/wrappers/Header";
import {useSelector,useDispatch} from 'react-redux'
import { addSomething, register } from "../features/user/userSlice";
import { RootState, useAppDispatch } from "../store";

interface InitialState{
    name:string,
    email:string,
    password:string,
    isMember:boolean

}

const initialState:InitialState={
    name:'',
    email:'',
    password:'',
    isMember:true
}

const Header = () =>{
    const state = useSelector((state:RootState)=>state)
    const dispatch = useAppDispatch()
    console.log(state)
    const trial = ()=>{
        // dispatch(addSomething())
        dispatch(register({name:'hadaro',email:'hadaradams@gmail.com',password:'hjkrakd$%.'}) )
    }
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
                <button onClick={trial}>
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
