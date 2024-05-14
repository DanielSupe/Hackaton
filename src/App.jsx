import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';

function App() {

  return (
    <BrowserRouter>
        <Routes>
        
        <Route path="/" element={<Home/>} />



        {/* para poner un layaut */}

        {/* <Route path="/Main" element={}>
          <Route index element={<TemplateInicio />} />

        </Route> */}

        </Routes>

       </BrowserRouter> 
  )
}

export default App
