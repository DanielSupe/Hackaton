import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import SideMenu from "../homeMentor/components/SideMenu";

const TemplateDashboard = () => {
  // Estados para los valores de las cartas
  const [coronas, setCoronas] = useState(0);
  const [cuestionariosRealizados, setCuestionariosRealizados] = useState(0);
  const [preguntasCorrectas, setPreguntasCorrectas] = useState(0);

  //función para boton SideMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  //datos graficos
  const dataBar = {
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
    datasets: [
      {
        label: "Horas de estudio",
        data: [2, 3, 4, 1, 5],
        backgroundColor: "#ff3b19",
      },
    ],
  };

  const dataLine = {
    labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
    datasets: [
      {
        label: "Progreso semanal",
        data: [65, 59, 80, 81],
        borderColor: "#ff3b19",
        fill: false,
      },
    ],
  };

  const dataPie = {
    labels: ["Matemáticas", "Ciencias", "Lenguaje", "Arte"],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ["#ff3b19", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-[#f4f4f4]">
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "ml-64" : "ml-0 w-full"
        }`}
      >
        <main className="flex-1 p-5">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-white p-5 rounded shadow w-[80%] flex flex-row">
              <img
                src="/Images/HomeMentor/crown.png"
                alt="Corona"
                className="w-[55px] h-[55px] inline-block mr-[40px]"
              />
              <div className="flex flex-col items-end">
                <h2 className="text-xl font-semibold mb-3">
                  Número de Coronas
                </h2>
                <p>{coronas}</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded shadow w-[87%] flex flex-row">
              <img
                src="/Images/dashboard/cuestionario.png"
                alt="Corona"
                className="w-[55px] h-[55px] inline-block mr-[40px]"
              />
              <div className="flex flex-col items-end">
                <h2 className="text-xl font-semibold mb-3">
                  Cuestionarios Realizados
                </h2>
                <p>{cuestionariosRealizados}</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded shadow w-[87%] flex flex-row">
              <img
                src="/Images/dashboard/preguntas.png"
                alt="Corona"
                className="w-[55px] h-[55px] inline-block mr-[40px]"
              />
              <div className="flex flex-col items-end">
                <h2 className="text-xl font-semibold mb-3">
                  Cantidad de Preguntas Correctas
                </h2>
                <p>{preguntasCorrectas}</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Horas de Estudio</h2>
              <Bar data={dataBar} />
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Progreso Semanal</h2>
              <Line data={dataLine} />
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">
                Distribución de Materias
              </h2>
              <Pie data={dataPie} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TemplateDashboard;
