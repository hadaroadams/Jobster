import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from "../../utilities/axios";
import { RootState } from "../../store";
import { toast } from "react-toastify";

export const createJob = createAsyncThunk(
  "job/createJob",
  async (job: object, thunkApi) => {
    console.log((thunkApi.getState() as RootState).users.user?.token);
    try {
      const data = await apiInstance.post("/jobs", job, {
        headers: {
          "Authorization" : `Bearer ${
            (thunkApi.getState() as RootState).users.user?.token
          }`,
        },
      });
      console.log(data);
      toast("Job has been created", {
        type: "success",
        position: "top-center",
      });
      return data;
    } catch (error: any) {
      console.log(error);
      const errorMessage = error.response.data.message;
      console.log(errorMessage);
      toast(error.response.data.msg, {
        type: "error",
        position: "top-center",
      });
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
