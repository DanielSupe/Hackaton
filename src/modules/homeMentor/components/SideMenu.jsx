import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CastleIcon from '@mui/icons-material/Castle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const SideMenu = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  return (
    <div className="relative">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="p-2 rounded bg-gray-800 text-white fixed top-4 left-4 z-20"
        >
          <MenuIcon/>
        </button>
      )}

      <aside
        className={`transform top-0 left-0 w-64 bg-gray-800 text-white fixed h-full overflow-auto transition-transform duration-300 z-10 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className="p-2 rounded bg-gray-800 text-white absolute top-4 right-4"
        >
          <CloseIcon/>
        </button>
        <nav className="mt-10">
          <ul>
            <li className="mb-4 pt-[30px]">
              <Link to="/inicioMentor" className="block py-2 px-4 rounded hover:bg-gray-700 flex items-center">
                <CastleIcon className='mr-3'/>
                Inicio
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700 flex items-center">
                <QueryStatsIcon className='mr-3'/>
                Estadísticas
              </Link>
            </li>
            <li>
              <Link to="/premios" className="block py-2 px-4 rounded hover:bg-gray-700 flex items-center">
                <MilitaryTechIcon className='mr-3'/>
                Premios
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

SideMenu.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default SideMenu;
