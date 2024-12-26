import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

const Appr = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default Appr;