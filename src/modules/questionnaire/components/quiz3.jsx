import React from "react";
import Quiz from "react-quiz-component";

const quiz3 = {
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

  quizTitle: "Cuestionario de Inglés para Niños",
  quizSynopsis:
    "Este cuestionario está diseñado para ayudar a los niños con dificultades de aprendizaje a aprender inglés de una manera divertida y fácil.",
  questions: [
    {
      question: "¿Cómo se dice 'perro' en inglés?",
      questionType: "text",
      answers: ["Cat", "Dog", "Bird", "Fish"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! 'Perro' en inglés es 'Dog'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'Dog'.",
      explanation: "'Dog' es la palabra en inglés para 'perro'.",
      point: "1",
    },
    {
      question: "¿Cómo se dice 'gato' en inglés?",
      questionType: "text",
      answers: ["Bird", "Dog", "Cat", "Fish"],
      correctAnswer: "3",
      messageForCorrectAnswer: "¡Correcto! 'Gato' en inglés es 'Cat'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'Cat'.",
      explanation: "'Cat' es la palabra en inglés para 'gato'.",
      point: "1",
    },
    {
      question: "¿Cuál es la traducción de 'rojo' en inglés?",
      questionType: "text",
      answers: ["Blue", "Green", "Red", "Yellow"],
      correctAnswer: "3",
      messageForCorrectAnswer: "¡Correcto! 'Rojo' en inglés es 'Red'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'Red'.",
      explanation: "'Red' es la palabra en inglés para 'rojo'.",
      point: "1",
    },
    {
      question: "¿Cómo se dice 'escuela' en inglés?",
      questionType: "text",
      answers: ["House", "School", "Car", "Library"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! 'Escuela' en inglés es 'School'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'School'.",
      explanation: "'School' es la palabra en inglés para 'escuela'.",
      point: "1",
    },
    {
      question: "¿Cómo se dice 'libro' en inglés?",
      questionType: "text",
      answers: ["Pen", "Book", "Chair", "Desk"],
      correctAnswer: "2",
      messageForCorrectAnswer: "¡Correcto! 'Libro' en inglés es 'Book'.",
      messageForIncorrectAnswer: "Incorrecto. La respuesta correcta es 'Book'.",
      explanation: "'Book' es la palabra en inglés para 'libro'.",
      point: "1",
    },
  ],
};

const EnglishQuiz = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-md flex flex-col justify-center items-center text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cuestionario de Ingles
      </h2>
      <Quiz quiz={quiz3} shuffle={true} showInstantFeedback={true} />
    </div>
  );
};

export default EnglishQuiz;
