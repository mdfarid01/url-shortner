import React, { useState } from 'react'
import LoginForm from '../components/LoginForm.jsx'
import RegisterForm from '../components/RegisterForm'

const UserIcon = (
  <svg className="w-10 h-10 text-blue-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const AuthPage = () => {

    const [login, setLogin] = useState(true)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md border border-purple-200">
        <div className="flex items-center justify-center mb-6">
          {UserIcon}
          <h2 className="text-3xl font-bold text-purple-700 drop-shadow-lg">
            {login ? 'Login' : 'Register'}
          </h2>
        </div>
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
        <div className="mt-6 text-center">
          <button
            className="text-blue-600 font-semibold hover:underline transition"
            onClick={() => setLogin(!login)}
          >
            {login ? "Don't have an account? Register" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
    )
}

export default AuthPage