import React from 'react'
import { Routes, Route } from "react-router-dom";

import NavbarSite from './components/Navbar'
import FooterSite from './components/Footer';
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact';
import './App.css'

function App() {

  return (
    <>
      <NavbarSite />
      <Routes>
        <Route path='/TheSmartProject3-0' element={ <Home /> } />
        <Route path='/services' element={ <Services /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      <FooterSite />
    </>
  )
}

export default App
