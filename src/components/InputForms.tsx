import React, { useState } from "react"

interface InputFormProp {
    label:string,
    type:string
}

const InputForm = ({label,type}:InputFormProp) => {
  const [inputValue,setInputValue]= useState<string>('')
  const  handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    // console.log(e.target.value)
    setInputValue(()=> e.target.value)
  }
  console.log(inputValue)
  return (
    <div className="flex flex-col space-y-3 text-[#102A43]">
      <label htmlFor={label} className="text-xl text-[#102A43]">{label}</label>
      <input value={inputValue} type={type} name={label} onChange={handleChange} className="bg-[#F0F4F8] h-10 rounded-lg px-3 border border-1 border-slate-400"/>
    </div>
  )
}

export default InputForm
