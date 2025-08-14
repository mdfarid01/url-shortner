import React from 'react'
import UrlForm from '../components/UrlForm'

const LinkIcon = (
  <svg className="w-12 h-12 text-blue-500 mb-4 mx-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3.536 3.536a4 4 0 01-5.656-5.656l1.414-1.414M10.172 13.828a4 4 0 010-5.656l3.536-3.536a4 4 0 015.656 5.656l-1.414 1.414" />
  </svg>
)

const HomePage = () => {
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-lg border border-purple-200">
        {LinkIcon}
        <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-4 drop-shadow-lg">
          Welcome to URL Shortener
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Instantly shorten long URLs and share them easily. 
          <br />
          Paste your link below and get a short, easy-to-remember URL!
        </p>
        <UrlForm />
        <button
          className="mt-8 w-full py-3 bg-purple-600 text-white font-bold rounded-xl shadow hover:bg-purple-700 transition"
          onClick={() => navigate('/auth')}
        >
          Login / Register
        </button>
      </div>
    </div>
  )
}

export default HomePage