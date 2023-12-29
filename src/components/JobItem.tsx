import Wrapper from "../assets/wrappers/JobItem";
import NearMeIcon from "@mui/icons-material/NearMe";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import { Link } from "react-router-dom";

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
        <Link to="/editJob" className="edit">
          Edit
        </Link>
        <button className="delete" onClick={() => {
            
        }}>
          Delete
        </button>
      </div>
    </Wrapper>
  );
};

export default JobItem;
