import { State } from "../../components/Forms";
import { UserData } from "../../components/ProfileMain";
import { apiInstance } from "../../utilities/axios";
interface ApiCall {
  message: string;
}

interface ThunkApiConfig {
  dispatch: (...args: any[]) => any;
  getState: () => any;
  extra: any;
  requestId: string;
  signal: AbortSignal;
}

interface ThunkApiConfig {
  dispatch: (...args: any[]) => any;
  getState: () => any;
  extra: any;
  requestId: string;
  signal: AbortSignal;
}
export const registrationThunk = async (
  url: string,
  user: State,
  thunkApi: any
) => {
  console.log(thunkApi);
  try {
    const data = await apiInstance.post(url, user);
    console.log(data);
    return data;
  } catch (error) {
    const Apierror = <ApiCall>error;
    console.log(Apierror.message);
    return thunkApi.rejectWithValue(Apierror.message);
  }
};

export const loginThunk = async (url: string, user: State,thunkApi:any) => {
  try {
    const data = await apiInstance.post(url, user);
    console.log(data)
  } catch (error) {
    const Apierror = <ApiCall>error
    return thunkApi.rejectWithValue(Apierror.message)
  }
};

export const upDateThunk = async (url:string,user:UserData<string>,thunkApi:any)=>{
  try{
    const data = await apiInstance.post (url,user,{
      headers:{
        'Authorization': `Bearer $`
      }
    })
  }catch(error:any){
    const Apierror = <ApiCall>error
    return thunkApi.rejectWithValue(Apierror.message)
  }  
}
