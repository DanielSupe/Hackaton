import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import TemplateHome from './modules/home/template/TemplateHome';

function App() {

  return (
    <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<TemplateHome/>} />



        {/* para poner un layaut */}

        {/* <Route path="/Main" element={}>
          <Route index element={<TemplateInicio />} />

        </Route> */}

        </Routes>

       </BrowserRouter> 
  )
}

export default App
