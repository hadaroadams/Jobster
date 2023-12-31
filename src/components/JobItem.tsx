import Wrapper from "../assets/wrappers/JobItem";
import NearMeIcon from "@mui/icons-material/NearMe";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store";
import { deletJob, editJob } from "../features/allJobs/allJobsThunk";
import { editJobState } from "../features/jobs/JobSlice";

interface JobProps {
  _id: string;
  company: string;
  jobLocation: string;
  jobType: string;
  position: string;
  status: string;
  createdAt: string;
}

const JobItem = ({
  _id,
  company,
  createdAt,
  jobType,
  jobLocation,
  position,
  status,
}: JobProps) => {
  const dispatch = useAppDispatch();
  const editFunc = () => {
    dispatch(editJobState({_id,jobDetails:{company,jobLocation,jobType,status,position}}))
    };
  return (
    <Wrapper status={status}>
      <div className="topDiv">
        <span>{company.charAt(0)}</span>
        <div>
          <h3>{position}</h3>
          <h4>{company}</h4>
        </div>
      </div>
      <div className="middleDiv">
        <div>
          <span className="icon">
            <NearMeIcon />
          </span>
          <span className="text">{jobLocation}</span>
        </div>
        <div>
          <span className="icon">
            <CalendarMonthIcon />
          </span>
          <span className="text">
            {new Date(createdAt).toLocaleDateString()}
          </span>
        </div>
        <div>
          <span className="icon">
            <WorkIcon />
          </span>
          <span className="text">{jobType}</span>
        </div>
        <span className="status">{status}</span>
      </div>
      <div className="btnDiv">
        <Link to="/addjob" className="edit" onClick={editFunc}>
          Edit
        </Link>
        <button className="delete" onClick={() =>{dispatch(deletJob({_id}))}}>
          Delete
        </button>
      </div>
    </Wrapper>
  );
};

export default JobItem;
