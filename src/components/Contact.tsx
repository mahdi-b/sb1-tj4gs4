import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for subscribing!')
  }

  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Card className="md:w-1/2 mb-8 md:mb-0 bg-white text-gray-800">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">Email: info@aiinstitute.hawaii.edu</p>
              <p className="mb-2">Phone: (808) 123-4567</p>
              <p>Address: 2500 Campus Road, Honolulu, HI 96822</p>
            </CardContent>
          </Card>
          <Card className="md:w-1/2 bg-white text-gray-800">
            <CardHeader>
              <CardTitle>Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact