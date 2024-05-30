import React, { useState } from "react";
import SideMenu from "../homeMentor/components/SideMenu";

export function TemplateHomeHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (isOpen) => {
    setIsMenuOpen(isOpen);
  };
  return (
    <div className="min-h-screen flex bg-no-repeat bg-cover"
    style={{ backgroundImage:"url('/Images/Home/image_1.jpg')" }}
    >
      <SideMenu onToggle={handleToggleMenu} />
      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "ml-64" : "ml-0 w-full"
        }`}
        
      >
        <main className=" p-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-black mb-5 animate-fadeIn">
              ¡Bienvenido al inicio de tu aventura mentor!
            </h1>
            <img
              className="mx-auto mb-5 h-[400px] rounded-xl"
              src="/Images/HomeMentor/wizardHomeMentor.jpeg"
              alt="wizard"
            />
            <p className="text-[28px] font-bold text-black mb-5 animate-slideIn">
              Aquí encontrarás tips y herramientas para ayudar a tu héroe en su
              proceso de aprendizaje.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-3 text-red-800">
                  Tu Papel como Mentor
                </h2>
                <p className="text-red-700">
                  Como mentor, juegas un papel crucial en el apoyo y motivación
                  de tu héroe. En esta página, te proporcionaremos información
                  sobre cómo puedes involucrarte en su aprendizaje, seguir su
                  progreso y celebrar sus logros.
                </p>
              </div>

              <div className="col-span-2 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-3 text-red-800">
                  Se un buen guia para tu héroe
                </h2>
                <p className="text-red-700">
                  Como un sabio maestro medieval, el mentor debe guíar al héroe
                  en un viaje de autodescubrimiento y crecimiento personal. Le
                  enseña lecciones valiosas sobre la vida, la empatía y el
                  servicio a los demás, preparándolo para enfrentar los desafíos
                  del mundo real.
                </p>
              </div>

              <div className="col-span-1 row-span-2 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-3 text-red-800">
                  Celebrar los Logros con vuestra aldea
                </h2>
                <p className="text-red-700">
                  Es importante destacar los logros del héroe frente a su aldea
                  para fomentar un sentido de orgullo y apoyo. El mentor puede
                  organizar eventos donde el héroe sea honrado y reconocido
                  públicamente por sus contribuciones positivas hacia la
                  superación de obstaculos, inspirando a otros a seguir su
                  ejemplo.
                </p>
              </div>

              <div className="col-span-1 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-3 text-red-800">
                  Fortalece tu vinculo con tu héroe
                </h2>
                <p className="text-red-700">
                  Al igual que un caballero y su escudero, el mentor y el héroe
                  establecen un vínculo de confianza y camaradería. El mentor no
                  solo enseña habilidades prácticas, sino que también brinda
                  apoyo emocional y alienta al héroe a perseverar incluso en los
                  momentos más difíciles.
                </p>
              </div>

              <div className="col-span-1 bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 animate-fadeIn">
                <h2 className="text-2xl font-semibold mb-3 text-red-800">
                Inspirar con Ejemplos de Heroísmo
                </h2>
                <p className="text-red-700">
                  El mentor puede compartir relatos de héroes legendarios y
                  figuras históricas que enfrentaron desafíos similares a los
                  que enfrenta el hijo. Estas historias no solo sirven como
                  fuente de inspiración, sino que también enseñan lecciones
                  valiosas sobre el coraje, la perseverancia y la importancia de
                  defender causas justas.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default TemplateHomeHero;