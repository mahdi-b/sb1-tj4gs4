import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

const Collaboration = () => {
  return (
    <section id="collaboration" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Collaboration Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Industry Partnerships</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We collaborate with leading tech companies to solve real-world problems and drive innovation in AI.
              </p>
              <Button variant="outline">Learn more about partnerships</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Academic Collaborations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Join our network of researchers and institutions to advance the frontiers of AI research and education.
              </p>
              <Button variant="outline">Explore academic opportunities</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Collaboration