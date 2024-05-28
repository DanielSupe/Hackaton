import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Button } from "reactstrap";
import { LoginUserProfile, ReinicioExitoUser } from "../../store/Slices/login/LoginSlice";
import { showProgress } from "../../helpers/swals";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { exito} = useSelector((state) => ({
    exito: state.Login.exito,
}))

  const [form,setForm] = useState({email:"",password:"",tipo:""});
  const [disabled,setDisabled] = useState(true);

  const handleForm = (nameKey,change) => {
    setForm({
      ...form,
      [nameKey]:change
    })
  }

  useEffect(()=>{
    const {email,password,tipo} = form
    if(email && password && tipo){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  },[form])

  useEffect(()=>{
    if(exito){
      history('/Inicio')
      dispatch(ReinicioExitoUser())
    }
  },[exito])

  const LoginUser = ()=>{
    showProgress()
    dispatch(LoginUserProfile(form))
  }

  return (
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
  <div className="max-w-screen-xl bg-white border shadow-xl sm:rounded-lg flex justify-center flex-1">
    <div
      className="flex-1 text-center hidden rounded-l-lg md:flex bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Images/login/Designer.jpeg')",
      }}
    ></div>
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      <div className=" flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-2xl xl:text-4xl font-extrabold text-[#ff4b2b]">
            Inicia sesión
          </h1>
        </div>
        <div className="w-full flex-1 mt-8">

          <div className="mx-auto max-w-xs flex flex-col gap-4">
            <input
            value={form.email}
            onChange={(e)=>{handleForm("email",e.target.value)}}

              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff4b2b] focus:bg-white hover:border-[#ff4b2b] transition duration-300"
              type="email"
              placeholder="Correo Electrónico"
            />
            <input
             value={form.password}
             onChange={(e)=>{handleForm("password",e.target.value)}}
              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff4b2b] focus:bg-white hover:border-[#ff4b2b] transition duration-300"
              type="password"
              placeholder="Contraseña"
            />
            <select
            value={form.tipo}
            onChange={(e)=>{handleForm("tipo",e.target.value)}}
              className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-[#ff4b2b] focus:bg-white hover:border-[#ff4b2b] transition duration-300"
              name="userType"
            >
              <option value="" disabled>
                ¿Quien anda ahí?
              </option>
              <option value="MENTOR">Mentor</option>
              <option value="HERO">Héroe</option>
            </select>
            <Button onClick={()=>{LoginUser()}} disabled={disabled} className="mt-5 tracking-wide font-semibold bg-[#ff4b2b] text-gray-100 w-full py-4 rounded-lg hover:bg-[#f30a0e] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
              <span className="ml-3">Inicia sesión</span>
            </Button>
            <p className="mt-6 text-lg text-gray-600 text-center">
              ¿No tienes cuenta?{" "}
              <a href="/registrarse">
                <span className="text-[#ff4b2b] font-semibold relative after:block after:absolute after:w-full after:h-[2px] after:bg-[#ff4b2b] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:bottom-0 after:left-0">
                  Regístrate
                </span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Login;
