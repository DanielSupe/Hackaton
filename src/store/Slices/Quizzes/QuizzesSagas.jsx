import axios from "axios";
import { put, call, takeEvery, takeLatest } from "redux-saga/effects";
import { urlBackend } from "../../../helpers/constant";
import { SwalAlert } from "../../../helpers/swals";
import { getQuizSuccest } from "./QuizzesSlice";

const getQuizAxios = async (signature) => {
  const formatSignature = signature.toUpperCase();
  const rep = await axios.get(
    `${urlBackend}/quiz-questions/signature/${formatSignature}`
  );
  const res = JSON.parse(rep?.data?.questionText);
  return res;
};

function* getQuizFunction(action) {
  try {
    const resp = yield call(getQuizAxios, action.payload);
    yield put(getQuizSuccest(resp));
  } catch (error) {
    SwalAlert("Error", `${error.message}`, "error");
  }
}

function* QuizSaga() {
  yield takeEvery("Quizzes/getQuiz", getQuizFunction);
}

export default QuizSaga;
