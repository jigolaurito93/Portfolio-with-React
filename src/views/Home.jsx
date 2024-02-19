import React from 'react'
import LandingDisplay from '../components/LandingDisplay'
import About from '../components/About'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <LandingDisplay />
      <About />
    </div>
  )
}

export default Home
