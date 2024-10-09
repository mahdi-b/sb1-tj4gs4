import React from 'react'
import { Brain, Globe, Shield, Users } from 'lucide-react'

const Cores = () => {
  const cores = [
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
  ]

  return (
    <section id="cores" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Cores</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cores.map((core, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 text-center">
              <core.icon className="mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold mb-2">{core.title}</h3>
              <p className="text-gray-700">{core.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cores