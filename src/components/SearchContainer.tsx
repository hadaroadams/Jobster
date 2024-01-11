import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/ProfileMain";
import DashInput from "./DashInput";
import Selection from "./Selection";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { handleChange, clearFilter } from "../features/allJobs/allJobSlice";
import React from "react";
import { getAllJobs } from "../features/allJobs/allJobsThunk";

const SearchContainer = () => {
  const { sortOptions, search, searchStatus, searchType, sort,isLoading } = useSelector(
    (state: RootState) => state.allJob
  );

  const { jobTypeOptions, statusOptions } = useSelector(
    (state: RootState) => state.job
  );

  const dispatch = useAppDispatch();
  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(e);
    dispatch(handleChange({ name, value }));
    dispatch(getAllJobs())
  };
  const submit= () => {
    dispatch(clearFilter());
    dispatch(getAllJobs())
  };
  return (
    <Wrapper>
      <h1>Search Form</h1>
      <Form>
        <DashInput
          label="Search"
          name="search"
          onChange={handlechange}
          type="text"
          value={search}
          //  the Profile is to be able to to use the profile input for this component beca
          //   its is a good fit
        />
        <Selection
          label="Status"
          name="searchStatus"
          onChange={handlechange}
          value={searchStatus}
          items={["all", ...statusOptions]}
        />
        <Selection
          label="Type"
          name="searchType"
          onChange={handlechange}
          value={searchType}
          items={["all", ...jobTypeOptions]}
        />
        <Selection
          label="Sort"
          name="sort"
          onChange={handlechange}
          value={sort}
          items={["all", ...sortOptions]}
        />
        <button onClick={submit} disabled={isLoading} type="button">Clear Filters</button>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
