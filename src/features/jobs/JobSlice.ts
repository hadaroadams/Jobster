import { createSlice } from "@reduxjs/toolkit";


interface JobStat {
    isLoading: boolean;
    position: string;
    company: string;
    jobLocation: string;
    JobTypeOptions: ('full-time'|'part-time'|'remote'|'internship')[];
    jobType: string;
    statusOptions:['interview','declined','pending'];
    status: string;
    isEditing: boolean;
    editJobId: string;
}

const initialState:JobStat={
    isLoading:false,
    position:'',
    company:'',
    jobLocation:'',
    JobTypeOptions:['full-time','part-time','remote','internship'],
    jobType:'full-time',
    statusOptions:['interview','declined','pending'],
    status:'pending',
    isEditing:false,
    editJobId:''
}

const jobSlice = createSlice(
    {
        name:'job',
        initialState,
        reducers:{
            
        }
    }
)

export default jobSlice.reducer