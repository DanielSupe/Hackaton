import React from "react";
import "./styles.css";
import { useState } from "react";

const Register = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };
  return (
    <div className="flex text-start items-center justify-center flex-col min-h-full m-[10%]">
      <div
        id="main"
        className={`contain shadow-[0_14px_28px_rgba(0,0,0,0.25)] ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
      >
        <div className="sign-up">
          <form className="bg-[#fff] flex items-center justify-center flex-col px-[50px] h-[100%] text-center">
            <h1 className="text-[30px] font-bold m-0">
              ¡Create una cuenta querido heroe!
            </h1>
            <input
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              type="text"
              name="username"
              placeholder="Usuario"
            />
            <input
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              type="email"
              name="email"
              placeholder="Correo electronico"
            />
            <input
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              type="password"
              name="pswd"
              placeholder="Contraseña"
            />
            <select
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              name="role"
            >
              <option value="" disabled selected>
                Selecciona tu rol
              </option>
              <option value="guerrero">Guerrero</option>
              <option value="mago">Mago</option>
              <option value="caballero">Caballero</option>
              <option value="sabio">Sabio</option>
            </select>
            <button className="text-[#fff] bg-[#ff4b2b] text-[12px] font-bold py-[12px] px-[55px] m-[20px] rounded-[20px] border border-solid border-[#ff4b2b] outline-none tracking-[1px] uppercase buttonRegistration">
              Registrate
            </button>
          </form>
        </div>
        <div className="sign-in">
          <form className="bg-[#fff] flex items-center justify-center flex-col px-[50px] h-[100%] text-center">
            <h1 className="text-[30px] font-bold m-0">
              ¡Mentor, aquí crearas tu cuenta!
            </h1>
            <input
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              type="text"
              name="username"
              placeholder="Usuario"
            />
            <input
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              type="email"
              name="email"
              placeholder="Correo electronico"
            />
            <input
              className="bg-[#eee] py-[12px] px-[15px] my-[8px] mx-[15px] w-[100%] rounded-[5px] outline-none border-none"
              type="password"
              name="pswd"
              placeholder="Contraseña"
            />
            <a
              className="text-[#333] text-[14px] my-[15px] relative after:block after:absolute after:w-full after:h-[2px] after:bg-[#ff4b2b] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:bottom-0 after:left-0"
              href="#"
            >
              ¿Olvidaste tu contraseña?
            </a>

            <button className="text-[#fff] bg-[#ff4b2b] text-[12px] font-bold py-[12px] px-[55px] m-[20px] rounded-[20px] border border-solid border-[#ff4b2b] outline-none tracking-[1px] uppercase buttonRegistration">
              Entra
            </button>
          </form>
        </div>
        <div className="overlay-container absolute top-0 left-[50%] w-[50%] h-[100%] overflow-hidden">
          <div className="overlay">
            <div className="overlay-left">
              <h1 className="text-[30px] font-bold m-0">¿Eres un mentor?</h1>
              <p className="text-[14px] font-thin leading-5 tracking-wider mt-[15px] mb-[20px]">
                ¡Para registrarte como mentor puedes registrarte aqui!
              </p>
              <button
                onClick={handleSignInClick}
                id="signIn"
                className=" text-[#fff] bg-transparent text-[12px] font-bold py-[12px] px-[55px] m-[20px] rounded-[20px] border-[2px] border-solid border-[#fff] outline-none tracking-[1px] uppercase buttonRegistration"
              >
                ¡Registro Mentor!
              </button>
            </div>
            <div className="overlay-right">
              <h1 className="text-[30px] font-bold m-0">
                ¡Ey! ¿eres un héroe?
              </h1>
              <p className="text-[14px] font-thin leading-5 tracking-wider mt-[15px] mb-[20px]">
                Crea tu cuenta de heroe aquí
              </p>
              <button
                onClick={handleSignUpClick}
                id="signUp"
                className=" text-[#fff] bg-transparent text-[12px] font-bold py-[12px] px-[55px] m-[20px] rounded-[20px] border-[2px] border-solid border-[#fff] outline-none tracking-[1px] uppercase buttonRegistration"
              >
                ¡Registrate héroe!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
