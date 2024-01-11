import { useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobContainer";
import JobItem from "./JobItem";
import { RootState, useAppDispatch } from "../store";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsThunk";
import Loader from "./Loader";
import PaginationContainer from "./PaginationContainer";

const JobContainer = () => {
  const { jobs, isLoading, numberOfPages, page } = useSelector(
    (state: RootState) => state.allJob
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page]);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h1>{jobs.length ? jobs.length : "No"} Jobs Found</h1>
          <div className="jobContainer">
            {jobs.map((items) => {
              return <JobItem key={items._id} {...items} />;
            })}
          </div>
          {numberOfPages > 1 && <PaginationContainer />}
        </>
      )}
    </Wrapper>
  );
};

export default JobContainer;
