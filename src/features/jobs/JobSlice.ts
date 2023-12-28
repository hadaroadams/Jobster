import { createSlice, current } from "@reduxjs/toolkit";
import { createJob } from "./jobThunk";

type JobTypeOption ='full-time'|'part-time'|'remote'|'internship'
type StatusOptions= 'interview'|'declined'|'pending'

interface JobStat {
    isLoading: boolean;
    position: string;
    company: string;
    jobLocation: string;
    jobTypeOptions: (JobTypeOption)[];
    jobType: string;
    statusOptions:StatusOptions[];
    status: string;
    isEditing: boolean;
    editJobId: string;
}

const initialState:JobStat={
    isLoading:false,
    position:'',
    company:'',
    jobLocation:'',
    jobTypeOptions:['full-time','part-time','remote','internship'],
    jobType:'full-time',
    statusOptions: ['interview','declined','pending'],
    status:'pending',
    isEditing:false,
    editJobId:''
}

type Names= "position"|'company'|'jobLocation'|'jobType'|'status'

const jobSlice = createSlice(
    {
        name:'job',
        initialState,
        reducers:{
            handleChange:(state,payload)=>{
                console.log(payload)
                const {name , value} = payload.payload as {name:Names,value:string}
                state[name] = value
                console.log(current(state))
            },
            clearValue:()=> initialState
        },
        extraReducers:(builder)=>{
            builder
            .addCase(createJob.pending,(state)=>{
                
            })
            .addCase(createJob.fulfilled,(state)=>{

            })
            .addCase(createJob.rejected,()=>{

            })
        }
    }
)

export const { handleChange,clearValue} = jobSlice.actions

export default jobSlice.reducer