import React, { useEffect, useState } from "react";
import Quiz from "react-quiz-component";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { HEADER_QUIZ } from "../constant/quiz.constant";
import { getQuiz } from "../../../store/Slices/Quizzes/QuizzesSlice";

const ShowQuiz = ({ Signature }) => {
  const { QuizSignature } = useSelector((state) => ({
    QuizSignature: state.Quizzes.QuizSignature,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuiz(Signature));
  }, [dispatch]);

  const renderShowQuiz = () => {
    if (QuizSignature) {
      const quizData = {
        ...HEADER_QUIZ,
        ...QuizSignature,
        questions: QuizSignature.questions.map((question) => ({
          ...question,
          answers: [...question.answers],
        })),
        appLocale: { ...QuizSignature.appLocale },
      };
      return <Quiz quiz={quizData} shuffle={true} showInstantFeedback={true} />;
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cuestionario de {Signature}
      </h2>
      {renderShowQuiz()}
    </div>
  );
};
ShowQuiz.propTypes = {
  Signature: PropTypes.string.isRequired,
};

export default ShowQuiz;
