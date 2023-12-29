import { createSlice } from "@reduxjs/toolkit";
import { deletJob, getAllJobs } from "./allJobsThunk";

interface IntialFilterState {
  search: string;
  searchStatus: string;
  searchType: string;
  sort: string;
  sortOptions: ["latest", "oldest", "a-z", "z-a"];
}

interface InitialState extends IntialFilterState {
  isLoading: boolean;
  jobs: {
    company: string;
    createdAt: string;
    createdBy: string;
    jobLocation: string;
    jobType: string;
    position:string;
    status: string;
    updatedAt: string;
    _id:string;
  }[];
  totalJobs: number;
  numberOfPages: number;
  page: number;
  stats: {};
  monthlyAppilication: [];
}

const initialFilterState: IntialFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState: InitialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numberOfPages: 1,
  page: 1,
  stats: {},
  monthlyAppilication: [],
  ...initialFilterState,
};

const allJobSlice = createSlice({
  name: "alljobs",
  initialState,
  reducers: {
    clearFilter: (state) => {
      return {
        ...initialState,
      };
    },
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.jobs = payload.data.jobs;
        state.isLoading = false;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deletJob.pending,(state)=>{
        state.isLoading=true;
      })
      .addCase(deletJob.fulfilled,(state)=>{
        state.isLoading=false
      })
      .addCase(deletJob.rejected,(state)=>{
        state.isLoading=false
      })
  },
});

const { clearFilter } = allJobSlice.actions;
export default allJobSlice.reducer;
