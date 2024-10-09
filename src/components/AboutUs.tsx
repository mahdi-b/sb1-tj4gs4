import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="AI Institute Team"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Our Mission</CardTitle>
                </CardHeader>
                <p className="text-lg mb-4">
                  The AI Institute, also known as Aloha Intelligence, is a cutting-edge research center at the University of Hawaii dedicated to advancing the field of artificial intelligence while embracing the spirit of Aloha.
                </p>
                <p className="text-lg mb-4">
                  Our mission is to develop innovative AI solutions that address global challenges while promoting collaboration, respect, and harmony in line with Hawaiian values.
                </p>
                <p className="text-lg">
                  Through interdisciplinary research and partnerships, we strive to create AI technologies that benefit humanity and our environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default AboutUs