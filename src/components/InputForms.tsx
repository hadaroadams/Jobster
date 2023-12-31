import React, { useState } from "react";
import { State } from "./Forms";

interface InputFormProp {
  label: string;
  type: string;
  value?:string
  stateFn: React.Dispatch<
    React.SetStateAction<{
      initialState: State;
    }>
  >;
}

const InputForm = ({ label, type, value, stateFn }: InputFormProp) => {
  // const [inputValue,setInputValue]= useState<string>('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    stateFn((state) => {
      const name = e.target.name 
      const name1 = name.charAt(0).toLocaleLowerCase() +name.slice(1) as "name" | "email" | "password";
    
      // console.log(name.slice(0,1).toLocaleLowerCase(),name)
      state.initialState[name1] = e.target.value;
      return state;
    });
  };
  // const stateChange =(state)=>{
  //     const name =
  // }
  // console.log(inputValue)
  return (
    <div className="flex flex-col space-y-3 text-[#102A43]">
      <label htmlFor={label} className="text-xl text-[#102A43]">
        {label}
      </label>
      <input
      defaultValue={value}
        type={type}
        name={label}
        onChange={handleChange}
        className="bg-[#F0F4F8]  h-10 rounded-lg px-3 border border-1 border-slate-400"
      />
    </div>
  );
};

export default InputForm;
