import { toast } from "react-toastify";
import { State } from "../../components/Forms";
import { UserData } from "../../components/ProfileMain";
import { RootState } from "../../store";
import { apiInstance } from "../../utilities/axios";
import { logOutUser } from "./userSlice";
import { clearValue } from "../jobs/JobSlice";
import { clearAllState } from "../allJobs/allJobSlice";



interface ApiCall {
  message: string;
}


export const registrationThunk = async (
  url: string,
  user: State,
  thunkApi: any
) => {
  console.log(thunkApi.getState());
  try {
    const data = await apiInstance.post(url, user);
    console.log(data);
    toast("Successfully Registered", {
      type: "success",
      position: "top-center",
    });
    return data;
  } catch (error:any) {
    const Apierror = <ApiCall>error;
    console.log(Apierror);
    toast(error.response.data.msg, {
      type: "error",
      position: "top-center",
    });
    return thunkApi.rejectWithValue(Apierror.message);
  }
};

export const loginThunk = async (url: string, user: State, thunkApi: any) => {
  try {
    const data = await apiInstance.post(url, user, {
      headers: {
        Authorization: `Bearer ${
          (thunkApi.getState() as RootState).users.user?.token
        }`,
      },
    });
    console.log(data);
    toast("Successfully Logged In", {
      type: "success",
      position: "top-center",
    });
    return data;
  } catch (error: any) {
    const Apierror = <ApiCall>error;
    console.log(Apierror.message);
    toast(error.response.data.msg, {
      type: "error",
      position: "top-center",
    });
    return thunkApi.rejectWithValue(Apierror.message);
  }
};

export const upDateThunk = async (
  url: string,
  user: UserData<string>,
  thunkApi: any
) => {
  try {
    const data = await apiInstance.patch(url, user, {
      headers: {
        Authorization: `Bearer ${
          (thunkApi.getState() as RootState).users.user?.token
        }`,
      },
    });
    console.log(data);
    toast("User SuccessFully Updated", {
      type: "success",
      position: "top-center",
    });
    return data;
  } catch (error: any) {
    const Apierror = <ApiCall>error;
    console.log(Apierror);
    toast(error.response.data.msg, {
      type: "error",
      position: "top-center",
    });
    return thunkApi.rejectWithValue(Apierror.message);
  }
};

export const logOutThunk = async (message:string,thunkApi:any) => {
    console.log(thunkApi)
  try{
    thunkApi.dispatch(logOutUser())
    thunkApi.dispatch(clearValue())
    thunkApi.dispatch(clearAllState())
    toast(message,{
      type:'success',
      position:'top-center'
    })
    return Promise.resolve()
  }catch(error:any){
    return Promise.reject()
  }
}
