import React, { useState } from "react";
import SideMenu from "../homeMentor/components/SideMenu";

const TemplateTableMentor = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  const [data, setData] = useState([
    { coronas: 10, mensaje: "Mensaje 1", createdAt: "2024-05-30" },
    { coronas: 20, mensaje: "Mensaje 2", createdAt: "2024-05-29" },
    { coronas: 15, mensaje: "Mensaje 3", createdAt: "2024-05-28" },
    { coronas: 10, mensaje: "Mensaje 1", createdAt: "2024-05-30" },
    { coronas: 20, mensaje: "Mensaje 2", createdAt: "2024-05-29" },
    { coronas: 15, mensaje: "Mensaje 3", createdAt: "2024-05-28" }
  ]);

  return (
    <div className="bg-[#f4f4f4] min-h-screen p-4 flex justify-center items-center">
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "ml-64" : "ml-0 w-full"
        }`}
      >
        <div className="bg-white p-4 rounded shadow-md w-[1000px]">
          <h1 className="text-2xl font-bold mb-4">Compras hechas por tu héroe</h1>
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
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 border-b border-[#C8D5B9]">
                    {row.coronas}
                  </td>
                  <td className="px-4 py-4 border-b border-[#C8D5B9]">
                    {row.mensaje}
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
