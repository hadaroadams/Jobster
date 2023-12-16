import { createSlice,current,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiInstance } from '../../utilities/axios'

interface UsersIntialValue {
    number:number
}

 export const register = createAsyncThunk(
    'user/s',
    async(user,thunkApi)=>{
        console.log(user,thunkApi)
        const data = await apiInstance('/jobs')
        return data
    }
)

const initialState:UsersIntialValue ={
    number: 2
}

export const userSlice = createSlice({
    name:"Users",
    initialState,
    reducers:{
        addSomething:(state)=>{
            state.number+=1
            console.log('something')
            console.log(current(state))
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(register.pending, (state)=>{
                state.number=100
                console.log(state.number)
            })
    }
})


export const { addSomething } = userSlice.actions

export default userSlice.reducer