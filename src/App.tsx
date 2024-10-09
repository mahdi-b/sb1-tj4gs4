import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Research from './components/Research'
import Collaboration from './components/Collaboration'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <AboutUs />
      <Research />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  )
}

export default App