import React from 'react'
import { Brain, Globe, Shield, Users, Palette } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const Research = () => {
  const areas = [
    {
      title: "Machine Learning",
      icon: Brain,
      description: "Advancing state-of-the-art machine learning algorithms and techniques.",
    },
    {
      title: "AI for Sustainability",
      icon: Globe,
      description: "Developing AI solutions to address environmental challenges and promote sustainability.",
    },
    {
      title: "Ethical AI",
      icon: Shield,
      description: "Ensuring responsible AI development and deployment with a focus on ethics and fairness.",
    },
    {
      title: "AI in Society",
      icon: Users,
      description: "Studying the societal impacts of AI and developing human-centered AI applications.",
    },
    {
      title: "Creative AI",
      icon: Palette,
      description: "Exploring AI's potential in art, music, and creative processes to enhance human creativity.",
    },
  ]

  return (
    <section id="research" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Research Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Card key={index} className="flex flex-col items-center text-center">
              <CardHeader>
                <area.icon className="mb-4 text-blue-600" size={48} />
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research