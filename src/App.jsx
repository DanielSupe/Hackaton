import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/iniciarSesion" element={<Login/>} />
        <Route path="/registrarse" element={<Register/>} />

        {/* <Route path="/Inicio" element={<SideBar/>}>
          <Route index element={} />  componente a renderizar en /Inicio/ 
          <Route path="/Inicio/ejemplo" element={<ejemploComponent />} />  ejemplo de nueva ruta
          Otras rutas hijas aquí
        </Route> */}


        {/* para poner un layaut */}

        {/* <Route path="/Main" element={}>
          <Route index element={<TemplateInicio />} />

        </Route> */}

        </Routes>

       </BrowserRouter> 
  )
}

export default App
