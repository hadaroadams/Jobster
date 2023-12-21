import { State } from "../../pages/Register";
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
export const registrationThunk = async (user: State, thunkApi:any) => {
  console.log(thunkApi)
  try {
    const data = await apiInstance.post("/jobs/auth/register", user);
    console.log(data);
    return data;
  } catch (error) {
    const Apierro = <ApiCall>error;
    console.log(Apierro.message);
    return thunkApi.rejectWithValue(Apierro.message);
  }
};
