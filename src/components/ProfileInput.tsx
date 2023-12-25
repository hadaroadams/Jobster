
interface ProfileInput{
    ({}:{name:string,type:string,value:string}):JSX.Element
}

const ProfileInput:ProfileInput = ({name,type,value}) => {
  return (
    <div className="">
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} defaultValue={value} />
    </div>
  )
}

export default ProfileInput
