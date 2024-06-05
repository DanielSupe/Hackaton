import React, { useState } from "react";
import SideMenu from "../homeMentor/components/SideMenu";
import ShowQuiz from "./components/ShowQuiz";

const subjects = [
  {
    name: "Matematicas",
    image: "/Images/quiz/MathQuiz.jpeg",
  },
  {
    name: "Ingles",
    image: "/Images/quiz/EnglishQuiz.jpeg",
  },
  {
    name: "Biologia",
    image: "/Images/quiz/BiologyQuiz.jpeg",
  },
  {
    name: "Geografia",
    image: "/Images/quiz/GeographyQuiz.jpeg",
  },
  {
    name: "Español",
    image: "/Images/quiz/SpanishQuiz.jpeg",
  },
];

const TemplateQuestionnaire = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSignature, setSelectedSignature] = useState("");

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };
  const handleCardClick = (value) => {
    setSelectedSignature(value);
  };
  const handleClose = () => {
    setSelectedSignature("");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-no-repeat pt-[100px] bg-[#f4f4f4]"
      style={{
        backgroundImage: "url('/Images/Home/image_1.jpg')",
        backgroundSize: "100% 70%",
        backgroundPosition: "top",
      }}
    >
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 flex-grow h-auto relative ${
          isMenuOpen ? "ml-64" : "ml-0 w-full"
        }`}
      >
        <h1 className="text-[48px] text-white font-bold mb-8 text-center">
          ¡Bienvenido querido héroe a los Cuestionarios!
        </h1>

        <div className="bg-white rounded-lg grid grid-cols-5 gap-8 right-[150px] absolute bottom-20">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white w-[220px] rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => handleCardClick(subject.name)}
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
        {selectedSignature && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-3xl max-h-[90vh] overflow-y-auto">
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                onClick={handleClose}
              >
                &times;
              </button>
              <ShowQuiz Signature={selectedSignature} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateQuestionnaire;
