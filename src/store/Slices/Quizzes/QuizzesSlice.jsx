import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  QuizSignature: null,
  Loading: false,
  error: {},
  exito: false,
};

export const QuizzesSlice = createSlice({
  name: "Quizzes",
  initialState,
  reducers: {
    getQuiz: (state, action) => {
      state.Loading = true;
    },
    getQuizSuccest: (state, action) => {
      state.QuizSignature = action.payload;
      state.exito = true;
      state.Loading = true;
    },
    getQuizFail: (state, action) => {
      state.Loading = false;
    },
  },
});

export const { getQuiz, getQuizSuccest, getQuizFail } = QuizzesSlice.actions;
export default QuizzesSlice.reducer;
