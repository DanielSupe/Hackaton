import React from "react";
import Quiz from "react-quiz-component";

const quiz4 = {
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

  quizTitle: "Cuestionario de Geografía para Niños",
  quizSynopsis:
    "Este cuestionario está diseñado para mejorar tus habilidades de aprendizaje",
  questions: [
    {
      question: "¿Cuál es el río más largo del mundo?",
      questionType: "text",
      answers: ["Río Nilo", "Río Amazonas", "Río Misisipi", "Río Yangtsé"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! El río más largo del mundo es el Río Amazonas.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es el Río Amazonas.",
      explanation: "El Río Amazonas es conocido por ser el río más largo del mundo.",
      point: "1",
    },
    {
      question: "¿Cuál es el país más grande del mundo?",
      questionType: "text",
      answers: ["Canadá", "Estados Unidos", "China", "Rusia"],
      correctAnswer: "4",
      messageForCorrectAnswer: "¡Correcto! El país más grande del mundo es Rusia.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es Rusia.",
      explanation: "Rusia es el país más grande del mundo en términos de superficie.",
      point: "1",
    },
    {
      question: "¿Cuál es la capital de Francia?",
      questionType: "text",
      answers: ["Madrid", "París", "Berlín", "Roma"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! La capital de Francia es París.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es París.",
      explanation: "París es la capital y la ciudad más grande de Francia.",
      point: "1",
    },
    {
      question: "¿En qué continente se encuentra el desierto del Sahara?",
      questionType: "text",
      answers: ["Asia", "América del Sur", "África", "Australia"],
      correctAnswer: "3",
      messageForCorrectAnswer: "¡Correcto! El desierto del Sahara se encuentra en África.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es África.",
      explanation: "El Sahara es el desierto cálido más grande del mundo y se encuentra en el norte de África.",
      point: "1",
    },
    {
      question: "¿Qué océano es el más grande del mundo?",
      questionType: "text",
      answers: ["Océano Atlántico", "Océano Índico", "Océano Ártico", "Océano Pacífico"],
      correctAnswer: "4",
      messageForCorrectAnswer: "¡Correcto! El océano más grande del mundo es el Océano Pacífico.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es el Océano Pacífico.",
      explanation: "El Océano Pacífico es el más grande y profundo del mundo.",
      point: "1",
    },
  ],
};

const GeographyQuiz = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cuestionario de Geografía
      </h2>
      <Quiz quiz={quiz4} shuffle={true} showInstantFeedback={true} />
    </div>
  );
};

export default GeographyQuiz;
