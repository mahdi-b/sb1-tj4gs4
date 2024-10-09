import React from 'react'
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="z-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Aloha Intelligence</h1>
        <p className="text-xl mb-8">Advancing AI research with the spirit of Aloha</p>
        <Button variant="default" size="lg" className="bg-blue-600 hover:bg-blue-700">
          Learn More
        </Button>
      </div>
    </div>
  )
}

export default Hero