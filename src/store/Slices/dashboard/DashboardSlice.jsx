import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statistics: {},
  Loading: false,
  error: {},
  exito: false,
};

export const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState,
  reducers: {
    getDataDash: (state, action) => {
      state.Loading = true;
    },
    getDataDashSuccest: (state, action) => {
      state.statistics = action.payload;
      state.exito = true;
      state.Loading = false;
    },
    getDataDashFail: (state, action) => {
      state.Loading = false;
    },
  },
});

export const { getDataDash, getDataDashSuccest, getDataDashFail } =
  DashboardSlice.actions;
export default DashboardSlice.reducer;
