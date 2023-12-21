import { useDispatch } from "react-redux"
import Forms from "../components/Forms"
import React, {useState} from 'react'
import { register } from "../features/user/userSlice"
import { useAppDispatch } from "../store"

export interface State {
  name:string,
  email:string,
  password:string,
  isMember?:boolean
}
const initialState:State={
  name:"",
  email:'',
  password:'',
  isMember:true
}

const Register = () => {
  const [value,setValue] = useState(initialState);
  const dispatch = useAppDispatch()
  
  const handleChanges = ()=>{

  }
  const onSumit= (e:React.FormEvent)=>{
    e.preventDefault
    dispatch(register({name:'hadaro',email:'hadaradams@gmail.com',password:'hjkrakd$%.'}))
  }
  return (
    <div  className=" w-full min-h-[100vh] bg-[#F0F4F8]  flex justify-center  items-center ">
        <Forms formType='Register' submitForm={onSumit} />
    </div>
  )
}

export default Register
