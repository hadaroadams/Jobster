import { Form, useNavigate } from "react-router-dom";
import JobsterLogo from "../assets/JobsterLogo.svg";
import InputForm from "./InputForms";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { loginUser, registerUser } from "../features/user/userSlice";

export interface State {
  name?: string;
  email: string;
  password: string;
  isMember?: boolean;
}
const initialState: State = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Forms = ({ formType }: { formType: "Login" | "Register" }) => {
  const [value, setValue] = useState({ initialState });
  const { isLoading,user } = useSelector((state: RootState) => state.users);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  // console.log(value.initialState.)
  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])
  const onSumit = (e: React.FormEvent) => {
    e.preventDefault;
    if (formType === "Register") {
      dispatch(
        registerUser({
          ...value.initialState,
        })
      );
    }
    if (formType === "Login") {
      dispatch(
        loginUser({
          email: value.initialState.email,
          password: value.initialState.password,
        })
      );
    }
  };
  return (
    <main className="min-h-[90vh] my-10 sm:w-[400px] md:w-[500px] bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="w-full h-2 bg-[#3B82F6]"></div>
      <Form
        onSubmit={onSumit}
        className="flex flex-col items-center space-y-4 p-10"
      >
        <img src={JobsterLogo} alt="" className="w-[200px] " />
        <h1 className="text-center text-[#102A43] text-[2em] font-medium">
          {formType}
        </h1>
        <div className="w-full space-y-7">
          {formType === "Register" && (
            <InputForm label="Name" type="text" stateFn={setValue} />
          )}
          <InputForm label="Email" type="email" stateFn={setValue} />
          <InputForm label="Password" type="password" stateFn={setValue} />
        </div>
        <button
        disabled={isLoading}
          type="submit"
          className="w-full bg-[#3B82F6]  text-white p-3 text-xl font-medium rounded-lg"
        >
          {isLoading ? "Submitting" : "Submit"}
        </button>
        <button
        disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: "testUser@test.com", password: "secret" })
            );
          }}
          type="button"
          className="w-full bg-[#8eb3f0] text-[#3B82F6] p-3 font-medium rounded-lg"
        >
          {isLoading?'Loading':'Demo App'}
        </button>
        {formType === "Login" ? (
          <p className="text-[1.2em] text-[#102A43]">
            Not a member yet?{" "}
            <Link to="/register" className="text-[#3B82F6]">
              Register
            </Link>
          </p>
        ) : (
          <p className="text-[1.2em] text-[#102A43]">
            Already a member?{" "}
            <Link to="/login" className="text-[#3B82F6]">
              Login
            </Link>
          </p>
        )}
      </Form>
    </main>
  );
};

export default Forms;
