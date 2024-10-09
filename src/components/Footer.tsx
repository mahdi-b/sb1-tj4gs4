import React from 'react'
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">AI Institute</h3>
            <p>University of Hawaii</p>
            <p>Honolulu, HI 96822</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Research', 'Collaboration', 'Contact'].map((item) => (
                <li key={item}>
                  <Button variant="link" className="text-blue-300 hover:text-blue-100 p-0">
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
                <Button key={social} variant="ghost" className="text-blue-300 hover:text-blue-100 p-0">
                  {social}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 AI Institute (Aloha Intelligence). All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer