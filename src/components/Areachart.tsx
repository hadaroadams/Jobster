import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
// import Wrapper from "../assets/wrappers/BarChart"
import { useSelector } from "react-redux"
import { RootState } from "../store"


const Areachart = () => {
    const {monthlyApplications} = useSelector((state:RootState)=>state.allJob)
  return (
    
        <ResponsiveContainer width={'90%'} height={300}>
            <AreaChart  data={monthlyApplications}>
                <Area type={'monotone'} dataKey={'count'} fill="#3B82F6"/>
                <XAxis dataKey={'date'}/>
                <YAxis/>
                <Tooltip/>
                <CartesianGrid strokeDasharray={'10 10'}/>
            </AreaChart>
        </ResponsiveContainer>
   
  )
}

export default Areachart
