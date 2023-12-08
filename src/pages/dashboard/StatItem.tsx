import Wrapper from "../../assets/wrappers/StatItem"

interface StatProps{
    icon:JSX.Element,
    num:number,
    text:string,
    color:string,
}

const StatItem = ({icon,num,text,color}:StatProps) => {
  return (
    <Wrapper props={color}>
        <div className="topText">
            <h1>{num}</h1>
            <span>{icon}</span>
        </div>
        <div>
            <h3>
                {text}
            </h3>
        </div>
        <div className="liner">

        </div>
    </Wrapper>
  )
}

export default StatItem
