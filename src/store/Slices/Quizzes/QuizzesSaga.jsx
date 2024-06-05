import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { urlBackend } from "../../../helpers/constant";
import { SwalAlert } from "../../../helpers/swals";
import { getQuizSuccest } from "./QuizzesSlice";

const getQuizAxios = async(signature)=>{
    console.log(signature, 'getQuizAxios')
    const formatSignature = signature.toUpperCase();
    const rep = await axios.get(`${urlBackend}/quiz-questions/signature/${formatSignature}`);
    return rep.data;
}   

function* getQuizFunction(action) {
    try {
        const resp = yield call(getQuizAxios, action.payload)
        console.log(resp, 'respppp')
        yield put(getQuizSuccest(resp))
    } catch (error) {
        SwalAlert("Error",`${error.message}`,"error")
    }
}

function* QuizSaga (){
    yield takeEvery('Quizzes/getQuiz', getQuizFunction)
}

export default QuizSaga;