
interface DashInput <T>{
    ({}:{name:T,type:T,value:T,label:T,onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void}):JSX.Element
}

const DashInput:DashInput <string> = ({name,type,value,label,onChange}) => {
  return (
    <div className="">
      <label htmlFor={name}>{label}</label>
      <input type={type} onChange={onChange} name={name} defaultValue={value} />
    </div>
  )
} 

export default DashInput
