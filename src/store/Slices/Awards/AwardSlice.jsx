
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroe:{},
    awards:false,
    Loading: false,
    error:{},
    exito: false
};

export const AwardSlice = createSlice({
    name:"Award",
    initialState,
    reducers:{
        getAwards: (state,action)=>{
            state.Loading = true;
        },
        getAwardsSuccess: (state,action)=>{
            console.log("payloaddd",action)
            state.awards = (action.payload == null ? null:JSON.parse(action.payload))
            state.Loading = false;
        },
        getAwardsFail: (state,action)=>{
            state.Loading = false;
        },
        UpdateAwards: (state,action)=>{
            state.Loading = true;
        },
        UpdateAwardsSuccess: (state)=>{
            state.exito = true
            state.Loading = false;
        },
        UpdateAwardsFail: (state,action)=>{
            state.Loading = false;
        },


        GetHeroe: (state,action)=>{
            state.Loading = true;
        },
        GetHeroeSuccess: (state,action)=>{
            state.heroe = action.payload
            state.Loading = false;
        },

    }
})

export const {getAwards,getAwardsSuccess,getAwardsFail,UpdateAwards,UpdateAwardsSuccess,UpdateAwardsFail,GetHeroe,GetHeroeSuccess } = AwardSlice.actions;
export default AwardSlice.reducer