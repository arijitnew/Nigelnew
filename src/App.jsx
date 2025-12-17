import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6">
      
      {/* Center Card */}
      <div className="max-w-md mx-auto mt-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl p-6">
        
        <h1 className="text-3xl font-bold text-center text-red-500 mb-2">
          Tailwind Test 🚀
        </h1>

        <p className="text-center text-gray-300 text-sm mb-6">
          If everything below looks correct, Tailwind is fully working.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-6">
          <button className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition">
            Primary
          </button>
          <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition">
            Secondary
          </button>
        </div>

        {/* Badge + Flex */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">
            ACTIVE
          </span>
          <span className="text-xs text-gray-400">
            Status OK
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 text-center text-sm mb-6">
          <div className="rounded-lg bg-white/10 p-3">Grid 1</div>
          <div className="rounded-lg bg-white/10 p-3">Grid 2</div>
          <div className="rounded-lg bg-white/10 p-3">Grid 3</div>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Type here..."
          className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Tailwind utilities · Flex · Grid · Hover · Focus · Gradient
        </p>
      </div>
    </div>
  )
}
