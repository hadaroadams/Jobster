import Wrapper from "../../assets/wrappers/AllJobs"
import JobContainer from "../../components/JobContainer"
import SearchContainer from "../../components/SearchContainer"


const AllJobs = () => {
  return (
    <Wrapper>
      <SearchContainer/>
      <JobContainer/>
    </Wrapper>
  )
}

export default AllJobs
