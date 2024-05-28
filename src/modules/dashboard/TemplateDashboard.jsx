import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import SideMenu from "../homeMentor/components/SideMenu";

const TemplateDashboard = () => {

 //función para boton SideMenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  //datos graficos
  const dataBar = {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    datasets: [
      {
        label: 'Horas de estudio',
        data: [2, 3, 4, 1, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const dataLine = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
      {
        label: 'Progreso semanal',
        data: [65, 59, 80, 81],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  const dataPie = {
    labels: ['Matemáticas', 'Ciencias', 'Lenguaje', 'Arte'],
    datasets: [
      {
        data: [300, 50, 100, 80],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="min-h-screen flex bg-[#444746]">
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "ml-64" : "ml-0 w-full"
        }`}
      >
      <main className="flex-1 p-5">
        <h1 className="text-[38px] font-bold mb-5 text-center">¡Estas son las estadisticas de tu héroe!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Horas de Estudio</h2>
            <Bar data={dataBar} />
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Progreso Semanal</h2>
            <Line data={dataLine} />
          </div>
          <div className="bg-white p-5 rounded shadow">
            <h2 className="text-xl font-semibold mb-3">Distribución de Materias</h2>
            <Pie data={dataPie} />
          </div>
        </div>
      </main>
      </div>
    </div>
  );
};

export default TemplateDashboard;
