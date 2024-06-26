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
import Questionnaire from './pages/Questionnaire';
import LayautHeroe from './common/components/LayautHeroe';
import HomeHeroe from './pages/HomeHeroe';
import TableMentor from './pages/TableMentor';
import AwardsHero from './pages/AwardsHero';



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
          <Route path="/Inicio/Mentor/tabla" element={<TableMentor/>} />
        </Route>

        <Route path="/Inicio/Heroe" element={<LayautHeroe/>}>
          <Route index element={<HomeHeroe/>} />  
          <Route path="/Inicio/Heroe/cuestionario" element={<Questionnaire />} /> 
          <Route path="/Inicio/Heroe/premios" element={<AwardsHero />} /> 
        </Route>

        </Routes>

       </BrowserRouter> 
  )
}

export default App
