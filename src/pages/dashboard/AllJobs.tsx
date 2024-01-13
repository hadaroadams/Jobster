import { useSelector } from "react-redux"
import JobContainer from "../../components/JobContainer"
import SearchContainer from "../../components/SearchContainer"
import { RootState } from "../../store"


const AllJobs = () => {
  const {search }=useSelector((state:RootState)=>state.allJob)
  console.log('render')
  console.log(search)
  return (
    <div className="w-[90%]">
      <SearchContainer/>
      <JobContainer/>
    </div>
  )
}

export default AllJobs
