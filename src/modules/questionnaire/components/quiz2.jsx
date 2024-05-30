import React from "react";
import Quiz from "react-quiz-component";

const quiz2 = {
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

  quizTitle: "Cuestionario de Matemáticas para Niños",
  quizSynopsis:
    "Este cuestionario está diseñado para ayudar a los niños con dificultades de aprendizaje a aprender sobre matemáticas de una manera divertida y fácil.",
  questions: [
    {
      question: "¿Cuánto es 2 + 2?",
      questionType: "text",
      answers: ["3", "4", "5", "6"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! 2 + 2 es igual a 4.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 4.",
      explanation: "2 + 2 siempre es igual a 4.",
      point: "1",
    },
    {
      question: "¿Cuál es el número siguiente en la serie: 1, 2, 3, ...?",
      questionType: "text",
      answers: ["4", "5", "6", "7"],
      correctAnswer: "1",
      messageForCorrectAnswer: "¡Correcto! El siguiente número es 4.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 4.",
      explanation: "La serie cuenta en incrementos de 1: 1, 2, 3, 4.",
      point: "1",
    },
    {
      question: "¿Cuántos lados tiene un triángulo?",
      questionType: "text",
      answers: ["2", "3", "4", "5"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! Un triángulo tiene 3 lados.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 3.",
      explanation: "Un triángulo siempre tiene 3 lados.",
      point: "1",
    },
    {
      question: "Si tienes 5 manzanas y das 2, ¿cuántas te quedan?",
      questionType: "text",
      answers: ["1", "2", "3", "4"],
      correctAnswer: "3",
      messageForCorrectAnswer: "¡Correcto! Te quedan 3 manzanas.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 3.",
      explanation: "5 menos 2 es igual a 3.",
      point: "1",
    },
    {
      question: "¿Qué forma tiene una pelota de fútbol?",
      questionType: "text",
      answers: ["Cuadrada", "Redonda", "Triangular", "Ovalada"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! Una pelota de fútbol es redonda.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es redonda.",
      explanation: "Las pelotas de fútbol son redondas para rodar fácilmente.",
      point: "1",
    },
  ],
};


const MathQuiz = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cuestionario de Matemáticas
      </h2>
      <Quiz quiz={quiz2} shuffle={true} showInstantFeedback={true} />
    </div>
  );
};

export default MathQuiz;
