import React from "react";
import Quiz from "react-quiz-component";

const quiz = {
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

  quizTitle: "Cuestionario de Biología para Niños",
  quizSynopsis:
    "Este cuestionario está diseñado para ayudar a los niños con dificultades de aprendizaje a aprender sobre biología de una manera divertida y fácil.",
  questions: [
    {
      question: "¿Cuál es el órgano que usamos para pensar?",
      questionType: "text",
      answers: ["El corazón", "El cerebro", "Los pulmones", "El estómago"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! Usamos el cerebro para pensar.",
      messageForIncorrectAnswer:
        "Incorrecto. La respuesta correcta es el cerebro.",
      explanation: "El cerebro es el órgano principal del sistema nervioso.",
      point: "1",
    },
    {
      question: "¿Qué parte del cuerpo usamos para respirar?",
      questionType: "text",
      answers: ["Los pulmones", "Los riñones", "El hígado", "El corazón"],
      correctAnswer: "1",
      messageForCorrectAnswer: "¡Correcto! Usamos los pulmones para respirar.",
      messageForIncorrectAnswer:
        "Incorrecto. La respuesta correcta es los pulmones.",
      explanation: "Los pulmones son los órganos que permiten la respiración.",
      point: "1",
    },
    {
      question: "¿Cuál es el órgano principal del sistema circulatorio?",
      questionType: "text",
      answers: ["El cerebro", "El corazón", "El estómago", "Los pulmones"],
      correctAnswer: "2",
      messageForCorrectAnswer:
        "¡Correcto! El corazón es el órgano principal del sistema circulatorio.",
      messageForIncorrectAnswer:
        "Incorrecto. La respuesta correcta es el corazón.",
      explanation: "El corazón bombea la sangre a través del cuerpo.",
      point: "1",
    },
    {
      question: "¿Qué necesitamos para vivir?",
      questionType: "text",
      answers: ["Comida", "Agua", "Aire", "Todas las anteriores"],
      correctAnswer: "4",
      messageForCorrectAnswer:
        "¡Correcto! Necesitamos comida, agua y aire para vivir.",
      messageForIncorrectAnswer:
        "Incorrecto. La respuesta correcta es todas las anteriores.",
      explanation:
        "Para vivir necesitamos una combinación de comida, agua y aire.",
      point: "1",
    },
    {
      question: "¿Qué es una célula?",
      questionType: "text",
      answers: [
        "La unidad básica de la vida",
        "Un tipo de planta",
        "Un órgano del cuerpo",
        "Un mineral",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer:
        "¡Correcto! La célula es la unidad básica de la vida.",
      messageForIncorrectAnswer:
        "Incorrecto. La respuesta correcta es la unidad básica de la vida.",
      explanation:
        "Las células son las unidades estructurales y funcionales de todos los seres vivos.",
      point: "1",
    },
  ],
};

const BiologyQuiz = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cuestionario de Biología
      </h2>
      <Quiz quiz={quiz} shuffle={true} showInstantFeedback={true} />
    </div>
  );
};

export default BiologyQuiz;
