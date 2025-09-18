import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import HeritagePage from './components/HeritagePage'
import CulturePage from './components/CulturePage'
import ContactPage from './components/ContactPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/heritage" element={<HeritagePage />} />
        <Route path="/culture" element={<CulturePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App