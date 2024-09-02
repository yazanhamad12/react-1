import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar.jsx"
import About from "./About.jsx"
import Footer from "./Footer.jsx"


export default function App(){
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  )
}