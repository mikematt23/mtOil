import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState{
    isLoggedIn: boolean,
    user:{
        email:string,
        address:string,
        state:string,
        zipCode:string,
        phoneNumber:string
    },
    cars:{
        make:string[],
        model:string[]
    }
}

const initialState: UserState = {
    isLoggedIn: false,
    user:{
        email:"",
        address:"",
        state:"",
        zipCode:"",
        phoneNumber:""
    },
    cars:{
        make:[],
        model:[]
    }
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
        },
        setUser: (state,action)=>{
          console.log(action)
        },
        setCars:(state, action)=>{
            console.log(action)
        }
    }
})

export const {setLogIn, setLogOut, setUser, setCars} = userSlice.actions
export default userSlice.reducer