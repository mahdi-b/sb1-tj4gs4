import React from 'react'

const LatestNews = () => {
  const news = [
    {
      title: "AI Institute Launches New Research Program",
      date: "March 15, 2024",
      excerpt: "Our institute is proud to announce a groundbreaking research program focused on sustainable AI solutions for climate change mitigation.",
    },
    {
      title: "Collaboration with Local Tech Companies",
      date: "February 28, 2024",
      excerpt: "We've partnered with leading Hawaiian tech companies to develop AI-powered tools for preserving indigenous languages and cultures.",
    },
    {
      title: "AI Ethics Symposium",
      date: "January 10, 2024",
      excerpt: "Join us for our annual AI Ethics Symposium, where experts will discuss the responsible development and deployment of AI technologies.",
    },
  ]

  return (
    <section id="news" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest from the Institute</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.date}</p>
              <p className="text-gray-700">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews