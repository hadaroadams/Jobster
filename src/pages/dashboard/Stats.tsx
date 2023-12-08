import Wrapper from "../../assets/wrappers/Stats"
import StatItem from "./StatItem"

const Stats = () => {
  return (
    <Wrapper>
      <div className="statsItemContainer">
        <StatItem color="red" icon={<i className="fa-solid fa-bug"></i>} num={27} text="Interviews To be conducted"/>
        <StatItem color="red" icon={<i className="fa-solid fa-bug"></i>} num={27} text="Interviews To be conducted"/>
        <StatItem color="red" icon={<i className="fa-solid fa-bug"></i>} num={27} text="Interviews To be conducted"/>
      </div>
    </Wrapper>
  )
}

export default Stats
