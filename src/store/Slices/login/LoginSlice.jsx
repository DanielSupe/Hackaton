
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User:{},
    Loading: false,
    error:{},
    exito: false
};

export const RegisterSlice = createSlice({
    name:"Login",
    initialState,
    reducers:{
        LoginUserProfile: (state,action)=>{
            state.Loading = true;
        },
        LoginUserSuccest: (state,action)=>{
            localStorage.setItem("USER",JSON.stringify(action.payload));
            state.User = action.payload;
            state.exito = true
            state.Loading = false;
        },
        ReinicioExitoUser: (state)=>{
            state.exito = false;
        },
        LoginUserFail: (state,action)=>{
            state.Loading = false;
        },
        LogoutUser:(state)=>{
            localStorage.removeItem("USER");
            state.User = {};
            state.Loading = false;
            state.exito = false;
            state.error = {}
        }
    }
})

export const {LoginUserProfile,LoginUserSuccest,LoginUserFail,LogoutUser,ReinicioExitoUser } = RegisterSlice.actions;
export default RegisterSlice.reducer