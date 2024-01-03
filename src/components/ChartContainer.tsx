import { useState } from "react";
import Wrapper from "../assets/wrappers/ChartContainer";
import Areachart from "./Areachart";
import BarChartComp from "./BarChart";

const ChartContainer = () => {
  const [changeChart, setChangeChart] = useState(false);

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        onClick={() => {
          setChangeChart(!changeChart);
        }}
      >
        {changeChart ? "Area Chart" : "Bar Chart"}
      </button>
      {changeChart ? <Areachart /> : <BarChartComp />}
    </Wrapper>
  );
};

export default ChartContainer;
