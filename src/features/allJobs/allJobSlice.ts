import { createSlice, current } from "@reduxjs/toolkit";
import { deletJob, editJob, getAllJobs, getStats} from "./allJobsThunk";

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
  stats: {
    pending:number,
    interview:number,
    declined:number
  };
  monthlyApplications: [];
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
  stats:{pending:0,declined:0,interview:0},
  monthlyApplications: [],
  ...initialFilterState,
};

const allJobSlice = createSlice({
  name: "alljobs",
  initialState,
  reducers: {
    clearFilter: (state) => {
      return {...state,...initialFilterState};
    },
    clearAllState:(state)=>{
      return state
    },
    handleChange:(state,{payload})=>{
      const {name , value} = payload  
      console.log(payload)
      state[name as ('search'|'searchStatus'|'searchType'|'sort')] = value
      console.log(current(state))
      return initialState
      
    },
    changePage:(state,{payload})=>{
      state.page = payload.page
    }
  },
  extraReducers: (bulder) => {
    bulder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.jobs = payload.data.jobs;
        state.numberOfPages=payload.data.numOfPages
        state.isLoading = false;
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editJob.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(editJob.fulfilled, (state)=>{
        state.isLoading=false
      })
      .addCase(editJob.rejected,(state)=>{
        state.isLoading=false
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
      .addCase(getStats.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(getStats.fulfilled,(state,{payload})=>{
          state.isLoading = false
          state.monthlyApplications = payload.data.monthlyApplications
          state.stats = payload.data.defaultStats
          console.log(payload,current(state))
      })
  },
});

export const { clearFilter,handleChange,changePage,clearAllState } = allJobSlice.actions;
export default allJobSlice.reducer;
