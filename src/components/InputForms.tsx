
interface InputFormProp {
    label:string,
    type:string
}

const InputForm = ({label,type}:InputFormProp) => {
  return (
    <div className="flex flex-col space-y-3 text-[#102A43]">
      <label htmlFor={label} className="text-xl text-[#102A43]">{label}</label>
      <input type={type} name={label} className="bg-[#F0F4F8] h-10 rounded-lg px-3 border border-1 border-slate-400"/>
    </div>
  )
}

export default InputForm
