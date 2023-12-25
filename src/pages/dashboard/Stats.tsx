import Wrapper from "../../assets/wrappers/Stats";
import StatItem from "../../components/StatItem";

const Stats = () => {
  return (
    <Wrapper>
      <div className="statsItemContainer">
        <StatItem
          color="#E9B949"
          icon={<i className="fa-solid fa-bug"></i>}
          num={24}
          text="Pending Applications"
        />
        <StatItem
          color="#647ACB"
          icon={<i className="fa-solid fa-bug"></i>}
          num={27}
          text="Interviews Scheduled"
        />
        <StatItem
          color="#D66A6A"
          icon={<i className="fa-solid fa-bug"></i>}
          num={24}
          text="Jobs Declined"
        />
      </div>
    </Wrapper>
  );
};

export default Stats;
