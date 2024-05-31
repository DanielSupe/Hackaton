import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CastleIcon from '@mui/icons-material/Castle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import TableChartIcon from '@mui/icons-material/TableChart';
import LogoutIcon from '@mui/icons-material/Logout';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { obtenerUser } from '../../../helpers/tools_helper';

const SideMenu = ({ onToggle }) => {

  const [pages,setPages] = useState([])
  const [color,setColor] = useState("bg-gray-800")


  const SideBarmentor = [
    {title:"Inicio",Link:"/Inicio/Mentor",icon:<CastleIcon className='mr-3'/>},
    {title:"Estadisticas",Link:"/Inicio/Mentor/dashboard",icon:<QueryStatsIcon className='mr-3'/>},
    {title:"Premios",Link:"/Inicio/Mentor/premios",icon:<MilitaryTechIcon className='mr-3'/>},
    {title:"Registro",Link:"/Inicio/Mentor/tabla",icon: <TableChartIcon className='mr-3'/>},
    {title:"Salir",Link:"/Logout",icon:<LogoutIcon className='mr-3'/>},
]

const SideBarHeroe = [
  {title:"Inicio",Link:"/Inicio/Heroe",icon:<CastleIcon className='mr-3'/>},
  {title:"Cuestionarios",Link:"/Inicio/Heroe/cuestionario",icon:<QuestionAnswerIcon className='mr-3'/>},
  {title:"Premios",Link:"/Inicio/Heroe/premios",icon:<MilitaryTechIcon className='mr-3'/>},
  {title:"Salir",Link:"/Logout",icon:<LogoutIcon className='mr-3'/>},
]

useEffect(()=>{
  const user = obtenerUser();
  if (user.heroes) {
    setPages(SideBarmentor)
} else if (user.mentor) {
  setPages(SideBarHeroe)
  setColor("bg-red-500")
}

},[])



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen]);

  return (
    <div className="relative">
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className={`p-2 rounded ${color} text-white fixed top-4 left-4 z-20`}
        >
          <MenuIcon/>
        </button>
      )}

      <aside
        className={`transform top-0 left-0 w-64 ${color} text-white fixed h-full overflow-auto transition-transform duration-300 z-10 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          onClick={toggleMenu}
          className={`p-2 rounded ${color} text-white absolute top-4 right-4`}
        >
          <CloseIcon/>
        </button>
        <nav className="mt-10">
          <ul>

            {pages.map((campo)=>{
              return(
                <li key={campo.Link} className="mb-4">
              <Link to={campo.Link} className="block py-2 px-4 rounded hover:scale-110 transition-all flex items-center">
                {campo.icon}
                {campo.title}
              </Link>
            </li>
              )
            })}
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
