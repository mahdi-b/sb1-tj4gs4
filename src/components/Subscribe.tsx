import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the subscription logic
    console.log('Subscribed:', email)
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <section id="subscribe" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-8">Subscribe to our newsletter for the latest AI research and events.</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-r-lg transition duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Subscribe