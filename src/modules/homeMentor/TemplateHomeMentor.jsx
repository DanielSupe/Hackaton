import React, { useState } from "react";
import SideMenu from "./components/SideMenu";
import Tips from "./components/Tips";
import Hero from "../../common/components/Hero";

export function TemplateHomeMentor() {

  const infoButton = {
    textButton:"Ver progresos",
    link:"/Inicio/Mentor/dashboard",
    estilos:"p-4 bg-gray-800 rounded-md text-white"
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
            <Hero ButtonLink={infoButton} paragraph="Descubre el mundo a través de los ojos de tu hijo, guiándolo con amor y curiosidad. Fomenta en él la pasión por aprender cada día, y juntos, embárquense en un viaje de conocimiento y crecimiento infinito. Inspira su mente y su corazón, y verás cómo florece su capacidad para soñar y alcanzar grandes logros." boltTitle="El aprendizaje es un viaje compartido" normalTitle="Inspira y Crece Junto a Tu Hijo" urlImage="\Images\HomeMentor/PadreHijo.png"/>
          </div>

          {/* <div className="max-w-4xl mx-auto text-center mt-4">

            <Tips />

          </div> */}
        </main>
      </div>
    </div>
  );
}
export default TemplateHomeMentor;
