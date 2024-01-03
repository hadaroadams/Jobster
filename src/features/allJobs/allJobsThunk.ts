import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../utilities/axios";
import { RootState } from "../../store";
import { clearValue } from "../jobs/JobSlice";

export const getAllJobs = createAsyncThunk(
  "allJobs/getJobs",
  async (_, thunkApi) => {
    const state = thunkApi.getState() as RootState
    const {search,page,sort,searchStatus,searchType}=state.allJob

    let url = `/jobs?status=${searchStatus}&sort=${sort}&jobType=${searchType}&page=${page}`;
    if(search){
      url = url+`&${search}`
    }
    
    try {
      const data = await apiInstance.get(url, {
        headers: {
          Authorization: `Bearer ${
            (thunkApi.getState() as RootState).users.user?.token
          }`,
        },
      });
      return data;
    } catch (error: any) {
      const errorMesg = error.response.data.mesg;
      return thunkApi.rejectWithValue(errorMesg);
    }
  }
);

export const deletJob = createAsyncThunk(
  "allJobs/deleteJob",
  async (jobId: { _id: string }, thunkApi) => {
    let url = `/jobs/${jobId._id}`;
    try {
      const data = await apiInstance.delete(url, {
        headers: {
          Authorization: `Bearer ${
            (thunkApi.getState() as RootState).users.user?.token
          }`,
        },
      });
      thunkApi.dispatch(getAllJobs());
      console.log(data);
      return data;
    } catch (error: any) {
      const errorMesg = error.response.data.mesg;

      return thunkApi.rejectWithValue(errorMesg);
    }
  }
);

export const editJob = createAsyncThunk(
  "allJobs/editJob",
  async (job: { editJobId: string; jobDetails: {} }, thunkApi) => {
    console.log(job.editJobId);
    let url = `/jobs/${job.editJobId}`;
    console.log(job);
    try {
      const data = await apiInstance.patch(url, job.jobDetails, {
        headers: {
          Authorization: `Bearer ${
            (thunkApi.getState() as RootState).users.user?.token
          }`,
        },
      });
      thunkApi.dispatch(clearValue())
      console.log(data)
      return data;
    } catch (error: any) {
      console.log(error)
      const errorMesg = error.response.data.mesg;
      return thunkApi.rejectWithValue(errorMesg);
    }
  }
);

export const  getStats = createAsyncThunk(
  'allJobs/stats',
  async(_,thunkApi)=>{
    const url= '/jobs/stats'
    try{
      const data = await apiInstance(url);
      console.log(data)
      return data
    }catch(error:any){
      const errorMesg = error.response.data.message
      return thunkApi.rejectWithValue(errorMesg)
    }
  }
)
