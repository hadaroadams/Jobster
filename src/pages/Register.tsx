import Forms from "../components/Forms"
import React, {useState} from 'react'

interface State {
  name:string,
  email:string,
  password:string,
  isMember:boolean
}
const initialState:State={
  name:"",
  email:'',
  password:'',
  isMember:true
}

const Register = () => {
  const [value,setValue] = useState(initialState);

  const onSumit= (e:React.FormEvent)=>{
    e.preventDefault
    console.log(e)
  }
  return (
    <div  className=" w-full min-h-[100vh] bg-[#F0F4F8]  flex justify-center  items-center ">
        <Forms formType='Register'/>
    </div>
  )
}

export default Register
