import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroe: {},
  awards: false,
  Loading: false,
  error: {},
  exito: false,
};

export const HeroSlice = createSlice({
  name: "Heroe",
  initialState,
  reducers: {
    buyAward: (state, action) => {
      state.Loading = true;
    },
    buyAwardSuccess: (state, action) => {
      state.exito = true;
      state.Loading = false;
    },
    buyAwardFail: (state, action) => {
      state.Loading = false;
    },
  },
});

export const { buyAward, buyAwardSuccess, buyAwardFail } = HeroSlice.actions;
export default HeroSlice.reducer;
