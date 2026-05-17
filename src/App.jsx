import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { useState, useEffect } from 'react'
import PortoLayout from './layouts/PortoLayout'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PortoLayout/>}/>


      </Routes>
    
    
    </BrowserRouter>
  )
}

export default App