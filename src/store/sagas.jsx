import createSagaMiddleware from "@redux-saga/core";
import { all } from 'redux-saga/effects';
import RegisterSaga from "./Slices/register/RegisterSaga";
import LoginSaga from "./Slices/login/LoginSaga";
import AwardSaga from "./Slices/Awards/AwardSaga";
import DashboardSaga from "./Slices/dashboard/DashboardSaga";
import LogsHeroSaga from "./Slices/LogsHero/LogsHeroSaga";
import HeroeSaga from "./Slices/Heroe/HeroeSaga";
import QuizSaga from "./Slices/Quizzes/QuizzesSaga";
export const saga = createSagaMiddleware(
    
)

// Define tu función rootSaga que combina todas las sagas individuales
export function* rootSaga() {
  yield all([
    RegisterSaga(),
    LoginSaga(),
    AwardSaga(),
    DashboardSaga(),
    LogsHeroSaga(),
    HeroeSaga(),
    QuizSaga()



      //Mas sagas




  ]);
}