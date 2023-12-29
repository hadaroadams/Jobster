import { Form } from "react-router-dom";
import Wrapper from "../../assets/wrappers/ProfileMain";
import DashInput from "../../components/DashInput";
import Selection from "../../components/Selection";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import React from "react";
import { clearValue, handleChange } from "../../features/jobs/JobSlice";
import { createJob } from "../../features/jobs/jobThunk";

const AddJob = () => {
  const { statusOptions, jobTypeOptions,position,company,jobLocation ,jobType,status} = useSelector(
    (state: RootState) => state.job
  );
  const dispatch = useAppDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createJob({position,company,jobType,status,jobLocation}))
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const clear = () => {
    dispatch(clearValue())
  };
  console.log('hello')
  return (
    <Wrapper>
      <h1>Search Form</h1>
      <Form>
        <DashInput
          label="Position"
          name="position"
          onChange={onChange}
          type="text"
          value={position}
        />
        <DashInput
          label="Company"
          name="company"
          onChange={onChange}
          type="text"
          value={company}
        />
        <DashInput
          label="Job Location"
          name="jobLocation"
          onChange={onChange}
          type="text"
          value={jobLocation}
        />
        <Selection
          items={[...statusOptions]}
          value={status}
          name="status"
          label="Status"
          onChange={onChange}
        />
        <Selection
          items={[...jobTypeOptions]}
          value={jobType}
          name="jobType"
          label="Job Type"
          onChange={onChange}
        />
        <section>
          <button type="button" onClick={clear}>
            clear
          </button>
          <button type="submit" onClick={submit}>
            Submit
          </button>
        </section>
      </Form>
      
    </Wrapper>
  );
};

export default AddJob;
