
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    idPadre:"",
    Loading: false,
    error:{},
    exito: false
};

export const RegisterSlice = createSlice({
    name:"Register",
    initialState,
    reducers:{
        RegisterUserMentor: (state,action)=>{
            state.Loading = true;
        },
        RegisterUserMentorSuccess: (state,action)=>{
            state.idPadre = action.payload
            state.Loading = false;
        },
        RegisterUserMentorFail: (state,action)=>{
            state.Loading = false;
        },
        RegisterUserHeroe: (state,action)=>{
            state.Loading = true;
        },
        RegisterUserHeroeSuccess: (state,action)=>{
            state.Loading = false;
            state.exito = true
        },
        RegisterUserHeroeFail: (state,action)=>{
            state.Loading = false;
        },
        ReinicioLog: (state)=>{
            state.Loading = false;
            state.exito = false;
            state.idPadre = "",
            state.error = {}
        },
    }
})

export const { RegisterUserMentor, RegisterUserMentorSuccess, RegisterUserMentorFail,RegisterUserHeroe,RegisterUserHeroeSuccess,RegisterUserHeroeFail,ReinicioLog} = RegisterSlice.actions;
export default RegisterSlice.reducer