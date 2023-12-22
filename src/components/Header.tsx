import JosterLogo from "../assets/JobsterLogo.svg";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Wrapper from "../assets/wrappers/Header";
import {useSelector,useDispatch} from 'react-redux'
import { addSomething, register } from "../features/user/userSlice";
import { RootState, useAppDispatch } from "../store";
import { useEffect } from "react";
import axios from "axios";

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
    const trial =async()=>{
        try{
        const data = await axios.post('https://jobify-prod.herokuapp.com/api/v1/toolkit/auth/register', {name:'hidr', email: 'hadaro@gmail.com', password: 'hadaroAdams' })
        // const respons = await data.json()
        console.log(data)
        }catch(error){
            console.log(error)
        }
        // dispatch(addSomething())
        // dispatch(register({name:'hadaro',email:'hadaradams@gmail.com',password:'hjkrakd$%.'}) )
    }
    // useEffect(()=>{
        
    // },[])
    const state = useSelector((state:RootState)=>state)
    const dispatch = useAppDispatch()
    console.log(state)
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
