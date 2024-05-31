import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logs: [],
  Loading: false,
  error: {},
  exito: false,
};

export const LogsHeroSlice = createSlice({
  name: "LogsHero",
  initialState,
  reducers: {
    getLogsHero: (state, action) => {
      state.Loading = true;
    },
    getLogsHeroSuccest: (state, action) => {
      state.statistics = action.payload;
      state.exito = true;
      state.Loading = false;
    },
    getLogsHeroFail: (state, action) => {
      state.Loading = false;
    },
  },
});

export const { getLogsHero, getLogsHeroSuccest, getLogsHeroFail } =
  LogsHeroSlice.actions;
export default LogsHeroSlice.reducer;
