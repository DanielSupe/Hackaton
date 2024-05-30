import React, { useState } from "react";
import BiologyQuiz from "./components/quiz1";
import MathQuiz from "./components/quiz2";
import EnglishQuiz from "./components/quiz3";
import GeographyQuiz from "./components/quiz4";
import SpanishQuiz from "./components/quiz5";

const subjects = [
  {
    name: "Matemáticas",
    image: "/Images/quiz/MathQuiz.jpeg",
    component: MathQuiz,
  },
  {
    name: "Inglés",
    image: "/Images/quiz/EnglishQuiz.jpeg",
    component: EnglishQuiz,
  },
  {
    name: "Biología",
    image: "/Images/quiz/BiologyQuiz.jpeg",
    component: BiologyQuiz,
  },
  {
    name: "Geografía",
    image: "/Images/quiz/GeographyQuiz.jpeg",
    component: GeographyQuiz,
  },
  {
    name: "Español",
    image: "/Images/quiz/SpanishQuiz.jpeg",
    component: SpanishQuiz,
  },
];

const TemplateQuestionnaire = () => {
  const [SelectedQuiz, setSelectedQuiz] = useState(null);

  const handleCardClick = (QuizComponent) => {
    setSelectedQuiz(() => QuizComponent);
  };

  const handleClose = () => {
    setSelectedQuiz(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-no-repeat pt-[100px]"
    style={{ backgroundImage: "url('/Images/Home/image_1.jpg')",
        backgroundSize: "100% 70%",
        backgroundPosition: "top" 
        }}>
        <h1 className="text-[48px] font-bold mb-8 text-center">
          ¡Bienvenido querido héroe a los Cuestionarios!
        </h1>
      
      <div className="bg-white rounded-lg grid grid-cols-5 gap-8">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="bg-white w-[220px] rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
            onClick={() => handleCardClick(subject.component)}
          >
            <img
              src={subject.image}
              alt={subject.name}
              className="h-[150px] w-full object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-bold text-center">{subject.name}</h2>
          </div>
        ))}
      </div>
      {SelectedQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              &times;
            </button>
            <SelectedQuiz />
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateQuestionnaire;
