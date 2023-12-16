import Forms from "../components/Forms"


const Login = () => {


  const submitLoginForm=()=>{
    console.log('submitting login')
  }
  return (
    <div className=" w-full min-h-[100vh] bg-[#F0F4F8]  flex justify-center  items-center ">
      <Forms formType="Login" submitForm={submitLoginForm} />
    </div>
  )
}

export default Login
