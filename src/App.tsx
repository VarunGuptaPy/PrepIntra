import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Cpu } from 'lucide-react'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import SearchInterviews from './components/SearchInterviews'
import ProfilePage from './components/ProfilePage'
import InterviewPractice from './components/InterviewPractice'
import InterviewSimulation from './components/InterviewSimulation'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <Cpu size={24} />
              <span>PrepIntra</span>
            </Link>
            <div className="space-x-4">
              <Link to="/search" className="btn btn-outline-light">Find Interviews</Link>
              <Link to="/login" className="btn btn-outline-light">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchInterviews />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/interview-practice" element={<InterviewPractice />} />
          <Route path="/interview-simulation" element={<InterviewSimulation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App