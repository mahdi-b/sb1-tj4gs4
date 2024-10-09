import React from 'react'
import { Brain } from 'lucide-react'
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 transform -skew-y-6 origin-top-left z-0"></div>
      <div className="relative z-10 container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-white">
            <Brain size={32} />
            <span className="text-xl font-bold">AI Institute</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {['About', 'Research', 'Collaboration', 'Contact'].map((item) => (
                <li key={item}>
                  <Button variant="ghost" className="text-white hover:text-blue-200">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header