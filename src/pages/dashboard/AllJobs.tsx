import { useSelector } from "react-redux"
import Wrapper from "../../assets/wrappers/AllJobs"
import JobContainer from "../../components/JobContainer"
import SearchContainer from "../../components/SearchContainer"
import { RootState } from "../../store"


const AllJobs = () => {
  const {search }=useSelector((state:RootState)=>state.allJob)
  console.log('render')
  console.log(search)
  return (
    <Wrapper>
      <SearchContainer/>
      <JobContainer/>
    </Wrapper>
  )
}

export default AllJobs
