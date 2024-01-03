import { useSelector } from "react-redux";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { RootState } from "../store";
import Wrapper from "../assets/wrappers/BarChart";

const BarChartComp = () => {
    const {monthlyApplications}=useSelector((state:RootState)=>state.allJob)
  return (
        <ResponsiveContainer height={300}  width={"90%"} >
            <BarChart  data={monthlyApplications}>
                <XAxis dataKey={'date'}/>
                <YAxis/>
                <CartesianGrid strokeDasharray={'10 10'}/>
                <Tooltip/>
                <Bar dataKey={'count'} fillOpacity={1} fill="#3B82F6" barSize={100}/>
            </BarChart>
        </ResponsiveContainer>
  );
};

export default BarChartComp;
