import React, { useEffect, useState } from 'react'
import SideMenu from '../../homeMentor/components/SideMenu';
import Hero from '../../../common/components/Hero';
import { obtenerUrlImageRol } from '../../../helpers/tools_helper';

const TemplateHomeHeroes = () => {
    const infoButton = {
        textButton:"Estoy listo!",
        link:"/Inicio/Heroe/Cuestionario",
        estilos:"p-4  bg-red-500 rounded-md text-white"
      }
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const handleToggleMenu = (isOpen) => {
        setIsMenuOpen(isOpen);
      };


      return (
        <div className="min-h-full w-full flex bg-no-repeat bg-cover box-border"
    
        >
          <SideMenu onToggle={handleToggleMenu} />
          <div
            className={`transition-all duration-300 w-full h-auto ${isMenuOpen ? "ml-64" : "ml-0 w-full"
              }`}
    
          >
            <main className="w-full">
    
              <div className=" h-min md:h-screen w-full ">
                <Hero ButtonLink={infoButton} paragraph="Querido aventurero, para salvar nuestro reino, recuerda que el conocimiento es tu mejor arma. Explora, aprende y descubre los secretos ocultos que te llevarán a la victoria. ¡El destino del reino está en tus manos!" boltTitle="¡Despierta al Héroe Interior" normalTitle="y Embárcate en una Aventura Épica para Salvar Nuestro Reino!" urlImage={obtenerUrlImageRol()}/>
              </div>
    
              {/* <div className="max-w-4xl mx-auto text-center mt-4">
    
                <Tips />
    
              </div> */}
            </main>
          </div>
        </div>
      );
}

export default TemplateHomeHeroes