import React from "react";
import Quiz from "react-quiz-component";

const quiz5 = {
  appLocale: {
    landingHeaderText: "<questionLength> Preguntas",
    question: "Pregunta",
    startQuizBtn: "Inicia el cuestionario",
    resultFilterAll: "Todas",
    resultFilterCorrect: "Correctas",
    resultFilterIncorrect: "Incorrectas",
    prevQuestionBtn: "Anterior",
    nextQuestionBtn: "Siguiente",
    resultPageHeaderText:
      "Has completado el cuestionario. Tienes <correctIndexLength> de <questionLength> preguntas.",
  },

  quizTitle: "Cuestionario de Español para Niños",
  quizSynopsis:
    "Este cuestionario está diseñado para mejorar tus habilidades de aprendizaje",
  questions: [
    {
      question: "¿Cuál es la letra que sigue después de la 'C' en el alfabeto?",
      questionType: "text",
      answers: ["B", "D", "E", "F"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! La letra que sigue después de la 'C' es la 'D'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es la 'D'.",
      explanation: "En el alfabeto español, la letra 'D' sigue después de la 'C'.",
      point: "1",
    },
    {
      question: "¿Cuál es la palabra correcta para referirse a una casa pequeña?",
      questionType: "text",
      answers: ["Casón", "Casita", "Caseta", "Casilla"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! La palabra correcta es 'casita'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'casita'.",
      explanation: "La palabra 'casita' es el diminutivo de casa, refiriéndose a una casa pequeña.",
      point: "1",
    },
    {
      question: "¿Qué palabra es un sinónimo de 'bonito'?",
      questionType: "text",
      answers: ["Feo", "Grande", "Hermoso", "Pequeño"],
      correctAnswer: "3",
      messageForCorrectAnswer: "¡Correcto! Un sinónimo de 'bonito' es 'hermoso'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'hermoso'.",
      explanation: "La palabra 'hermoso' es un sinónimo de 'bonito'.",
      point: "1",
    },
    {
      question: "¿Cómo se llama el lugar donde trabajan los médicos?",
      questionType: "text",
      answers: ["Escuela", "Hospital", "Oficina", "Tienda"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! Los médicos trabajan en el hospital.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'hospital'.",
      explanation: "El 'hospital' es el lugar donde trabajan los médicos.",
      point: "1",
    },
    {
      question: "¿Cuál es el plural de 'lápiz'?",
      questionType: "text",
      answers: ["Lápizs", "Lápices", "Lápizes", "Lápiz"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! El plural de 'lápiz' es 'lápices'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'lápices'.",
      explanation: "La forma plural de 'lápiz' es 'lápices'.",
      point: "1",
    },
  ],
};

const SpanishQuiz = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cuestionario de Español
      </h2>
      <Quiz quiz={quiz5} shuffle={true} showInstantFeedback={true} />
    </div>
  );
};

export default SpanishQuiz;
