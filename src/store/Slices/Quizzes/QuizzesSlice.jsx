import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  QuizSignature: {},
  Loading: false,
  error: {},
  exito: false,
};

export const QuizzesSlice = createSlice({
  name: "Quizzes",
  initialState,
  reducers: {
    getQuiz: (state, action) => {
      console.log('getQuiz')
      state.Loading = true;
      state.QuizSignature = {hola:'hola'}
    },
    getQuizSuccest: (state, action) => {
      state.QuizSignature = (action.payload.questionText == null ? null:JSON.parse(action.payload.questionText));
      state.exito = true;
      state.Loading = true;

      console.log(initialState, 'state')
    },
    getQuizFail: (state, action) => {
      state.Loading = false;
    },
  },
});

export const { getQuiz, getQuizSuccest, getQuizFail } = QuizzesSlice.actions;
export default QuizzesSlice.reducer;
