import { useSelector } from "react-redux"
import Wrapper from "../assets/wrappers/JobContainer"
import JobItem from "./JobItem"
import { RootState, useAppDispatch } from "../store"
import { useEffect } from "react"
import { getAllJobs } from "../features/allJobs/allJobsThunk"
import Loader from "./Loader"

const JobContainer = () => {
    const {jobs, isLoading}=useSelector((state:RootState)=>state.allJob)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(getAllJobs())
    },[])
  return (
    <Wrapper>
        {
            isLoading?(
                <Loader/>
            ):(
                <>
            <h1>{jobs?jobs.length:'NO'} Jobs Found</h1>
            <div className="jobContainer">
                {
                    jobs.map((items)=>{  
                        return <JobItem key={items._id} {...items} />
                    })
                }
            </div>
        </>
            )
        }
        
    </Wrapper>
  )
}

export default JobContainer
