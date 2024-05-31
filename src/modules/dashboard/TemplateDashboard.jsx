import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import { useDispatch, useSelector } from "react-redux";
import { getDataDash } from "../../store/Slices/dashboard/DashboardSlice";
import SideMenu from "../homeMentor/components/SideMenu";

const TemplateDashboard = () => {
  const { statistics } = useSelector((state) => ({
    statistics: state.Dashboard.statistics,
  }));
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(() => {
    dispatch(getDataDash());
  }, [dispatch]);

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
                <h2 className="text-xl font-semibold mb-3">Número de Coronas</h2>
                <p>{statistics.totalCrowns}</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded shadow w-[87%] flex flex-row">
              <img
                src="/Images/dashboard/cuestionario.png"
                alt="Cuestionario"
                className="w-[55px] h-[55px] inline-block mr-[40px]"
              />
              <div className="flex flex-col items-end">
                <h2 className="text-xl font-semibold mb-3">Cuestionarios Realizados</h2>
                <p>{statistics.totalQuestionnaires}</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded shadow w-[87%] flex flex-row">
              <img
                src="/Images/dashboard/preguntas.png"
                alt="Preguntas"
                className="w-[55px] h-[55px] inline-block mr-[40px]"
              />
              <div className="flex flex-col items-end">
                <h2 className="text-xl font-semibold mb-3">Cantidad de Preguntas Correctas</h2>
                <p>{statistics.correctAnswers}</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Cuestionarios Realizados</h2>
              <Bar data={statistics.quizLogsByDay} />
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Preguntas Correctas por materia</h2>
              <Line data={statistics.correctAnswersBySubject} />
            </div>
            <div className="bg-white p-5 rounded shadow">
              <h2 className="text-xl font-semibold mb-3">Preguntas Incorrectas Por Materia</h2>
              <Pie data={statistics.incorrectAnswersBySubject} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TemplateDashboard;
