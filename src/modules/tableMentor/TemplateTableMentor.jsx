import React, { useEffect, useState } from "react";
import SideMenu from "../homeMentor/components/SideMenu";
import { useDispatch, useSelector } from "react-redux";
import { getLogsHero } from "../../store/Slices/LogsHero/LogsHeroSlice";

const TemplateTableMentor = () => {
  const { logs } = useSelector((state) => ({
    logs: state.LogsHero.logs,
  }));
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  useEffect(() => {
    dispatch(getLogsHero());
  }, [dispatch]);

  return (
    <div className="bg-[#f4f4f4] min-h-screen p-4 flex justify-center items-center">
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 flex justify-center items-center ${
          isMenuOpen ? "ml-64" : "ml-0 w-full"
        }`}
      >
        <div className="bg-white p-4 rounded shadow-md w-[1000px]">
          <h1 className="text-2xl font-bold mb-4">
            Compras hechas por tu héroe
          </h1>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="px-4 py-4 border-t border-b border-[#C8D5B9] text-left">
                  Coronas
                </th>
                <th className="px-4 py-4 border-t border-b border-[#C8D5B9] text-left">
                  Mensaje
                </th>
                <th className="px-4 py-4 border-t border-b border-[#C8D5B9] text-left">
                  Creado en
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 border-b border-[#C8D5B9]">
                    {row.crowns}
                  </td>
                  <td className="px-4 py-4 border-b border-[#C8D5B9]">
                    {row.message}
                  </td>
                  <td className="px-4 py-4 border-b border-[#C8D5B9]">
                    {row.createdAt}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TemplateTableMentor;
