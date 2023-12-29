import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../utilities/axios";
import { RootState } from "../../store";

export const getAllJobs = createAsyncThunk(
    'allJobs/getJobs',
    async(_,thunkApi)=>{
        let url = '/jobs'
        try{
            const data =await apiInstance.get(url,{
                headers:{
                    'Authorization':`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjUxZWZhZDJjZmE3YTI5NjM1MDE3MjUiLCJpYXQiOjE3MDM4Njc4ODAsImV4cCI6MTcwMzk1NDI4MH0.BPFP0iDsU7f5QaEUx__5PHDkQgldfrt_uEYLnahwU3U`
                }
            })
            return data
        }catch(error:any){
            const errorMesg = error.response.data.mesg
            return thunkApi.rejectWithValue(errorMesg)
        }
    }
)

export const deletJob = createAsyncThunk(
    'allJobs/deleteJob',
    async(jobId,thunkApi)=>{
        let url = `/jobs/${jobId}`
        try{
            const data = await apiInstance.delete(url,{
                headers:{
                    'Authorization':`Bearer ${(thunkApi.getState()as RootState).users.user?.token}`
                }
            })
            return data
        }catch(error:any){
            const errorMesg= error.response.data.mesg

            return thunkApi.rejectWithValue(errorMesg)
        }
    }
)

export const editJob = createAsyncThunk(
    'allJobs/editJob',
    async (jobId,thunkApi)=>{
        let url = `/jobs/${jobId}`
        try{
            const data = await apiInstance.patch(url,{
                headers:{
                    'Authorization':`Bearer ${(thunkApi.getState() as RootState).users.user?.token}`
                }
            })
            return data
        }catch(error:any){
            const errorMesg= error.response.data.mesg
            return thunkApi.rejectWithValue(errorMesg)
        }
    }
)