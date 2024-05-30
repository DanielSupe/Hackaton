import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeMentor from './pages/HomeMentor';
import Dashboard from './pages/Dashboard';
import Awards from './pages/Awards';
import Layaut from './common/components/LayautMentor';
import Inicio from './pages/Inicio';
import Logout from './common/components/Logout';
import LayautHero from './common/components/LayautHero';
import HomeHero from './pages/HomeHero';
import Questionnaire from './pages/Questionnaire';


function App() {

  return (
    <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/iniciarSesion" element={<Login/>} />
        <Route path="/registrarse" element={<Register/>} />
        <Route path="/inicioMentor" element={<HomeMentor/>} />
        <Route path="/Inicio" element={<Inicio />} /> 
        <Route path="/Logout" element={<Logout />} /> 


        <Route path="/Inicio/Mentor" element={<Layaut/>}>
          <Route index element={<HomeMentor/>} />  
          <Route path="/Inicio/Mentor/dashboard" element={<Dashboard />} />  
          <Route path="/Inicio/Mentor/premios" element={<Awards/>} />
        </Route>


        <Route path="/Inicio/Hero" element={<LayautHero/>}>
          <Route index element={<HomeHero/>} />  
          <Route path="/Inicio/Hero/cuestionario" element={<Questionnaire />} />  
        </Route>

        <Route path="/Inicio/Heroe" element={<LayautHeroe/>}>
          <Route index element={<HomeHeroe/>} />  
        </Route>


        {/* para poner un layaut */}

        {/* <Route path="/Main" element={}>
          <Route index element={<TemplateInicio />} />

        </Route> */}

        </Routes>

       </BrowserRouter> 
  )
}

export default App
