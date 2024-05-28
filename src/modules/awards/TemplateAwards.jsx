import React, { useState } from "react";
import SideMenu from "../homeMentor/components/SideMenu";

export function TemplateAwards() {
  // Función SiteMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  // Funciones agregar y eliminar
  const [awards, setAwards] = useState([]);
  const [newAward, setNewAward] = useState({ name: "", crowns: 1 });

  const handleAddAward = () => {
    if (newAward.name.trim() !== "") {
      setAwards([...awards, newAward]);
      setNewAward({ name: "", crowns: 1 });
    }
  };

  const handleDeleteAward = (index) => {
    const updatedAwards = [...awards];
    updatedAwards.splice(index, 1);
    setAwards(updatedAwards);
  };

  return (
    <div className="min-h-screen bg-no-repeat bg-cover"
    style={{ backgroundImage:"url('public/images/Home/image_1.jpg')" }}
    >
      <SideMenu onToggle={handleToggleMenu}
      />
      <div
        className={`transition-all duration-300 ${isMenuOpen ? "ml-64" : "ml-0 w-full"}`}
      ></div>
      <div className="flex-grow p-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Premios para tu Héroe
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="w-96 px-4 py-2 mr-4 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Nombre del premio"
            value={newAward.name}
            onChange={(e) => setNewAward({ ...newAward, name: e.target.value })}
          />
          <input
            type="number"
            className="w-[110px] px-4 py-2 mr-4 rounded-lg border border-gray-300 focus:outline-none"
            placeholder="Coronas"
            min="1"
            max="100"
            value={newAward.crowns}
            onChange={(e) => setNewAward({ ...newAward, crowns: parseInt(e.target.value) })}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={handleAddAward}
          >
            Agregar
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <div key={index} className="p-4 border rounded-lg bg-white">
              <p className="text-lg font-bold mb-2">{award.name}</p>
              <div className="flex justify-between items-center">
                <p>
                  Coronas necesarias: <span className="font-semibold">{award.crowns}</span>/100
                  <img src="/Images/HomeMentor/crown.png" alt="Corona" className="w-6 h-6 mb-1 inline-block" />
                </p>
                <button
                  className="text-red-500 hover:text-red-600 focus:outline-none"
                  onClick={() => handleDeleteAward(index)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateAwards;
