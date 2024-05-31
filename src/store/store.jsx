import { configureStore } from "@reduxjs/toolkit";
import { saga } from "./sagas";
import { rootSaga } from "./sagas";
import RegisterSlice from "./Slices/register/RegisterSlice";
import LoginSlice from "./Slices/login/LoginSlice";
import AwardSlice from "./Slices/Awards/AwardSlice";
import DashboardSlice from "./Slices/dashboard/DashboardSlice";
import LogsHeroSlice from "./Slices/LogsHero/LogsHeroSlice";
import { HeroSlice } from "./Slices/Heroe/HeroeSlice";
export const store = configureStore({
    reducer:{
         Register:RegisterSlice,
         Login:LoginSlice,
         Dashboard: DashboardSlice,
         LogsHero: LogsHeroSlice,
         Award: AwardSlice,
         Heroe: HeroSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)