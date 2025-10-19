import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Experience from './components/Experience'

function App() {
  

  return (
    <>
     <NavBar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>

    </>
  )
}

export default App
