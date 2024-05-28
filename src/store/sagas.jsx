import createSagaMiddleware from "@redux-saga/core";
import { all } from 'redux-saga/effects';
import RegisterSaga from "./Slices/register/RegisterSaga";
import LoginSaga from "./Slices/login/LoginSaga";
export const saga = createSagaMiddleware(
    
)

// Define tu función rootSaga que combina todas las sagas individuales
export function* rootSaga() {
  yield all([
    RegisterSaga(),
    LoginSaga(),



      //Mas sagas




  ]);
}