import { configureStore } from "@reduxjs/toolkit";
import { saga } from "./sagas";
import { rootSaga } from "./sagas";
import RegisterSlice from "./Slices/register/RegisterSlice";
import LoginSlice from "./Slices/login/LoginSlice";
import AwardSlice from "./Slices/Awards/AwardSlice";
export const store = configureStore({
    reducer:{
         Register:RegisterSlice,
         Login:LoginSlice,
         Award: AwardSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(rootSaga)