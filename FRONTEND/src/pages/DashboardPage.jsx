import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'
import urlImage from './url.jpg';

const LinkIcon = (
  <svg className="w-8 h-8 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3.536 3.536a4 4 0 01-5.656-5.656l1.414-1.414M10.172 13.828a4 4 0 010-5.656l3.536-3.536a4 4 0 015.656 5.656l-1.414 1.414" />
  </svg>
)


const DashboardPage = () => {
  return (
     <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 flex flex-col items-center justify-center p-6">
      {/* Header Image */}
      <img
        src={urlImage}
        alt="Dashboard Banner"
        className="rounded-xl shadow-lg mb-6 w-full max-w-2xl object-cover h-40"
      />
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-3xl border border-purple-200">
        <div className="flex items-center justify-center mb-6">
          {LinkIcon}
          <h1 className="text-4xl font-extrabold text-center text-purple-700 drop-shadow-lg">
            URL Shortener
          </h1>
        </div>
        <div className="mb-8">
          <UrlForm />
        </div>
        <div>
          <UserUrl />
        </div>
      </div>
      <footer className="mt-8 text-sm text-gray-700 flex items-center gap-2">
        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
        Made with <span className="text-pink-500 font-bold">♥</span> by Md Farid
      </footer>
    </div>
  )

}

export default DashboardPage