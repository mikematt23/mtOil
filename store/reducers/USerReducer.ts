import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState{
    isLoggedIn: boolean
}

const initialState: UserState = {
    isLoggedIn: false
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setLogIn:(state)=>{
            state.isLoggedIn = true
        },
        setLogOut: (state)=>{
            state.isLoggedIn = false
        }
    }
})

export const {setLogIn, setLogOut} = userSlice.actions
export default userSlice.reducer