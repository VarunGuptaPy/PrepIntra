import React from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold mb-4">
              <Cpu size={24} />
              <span>PrepIntra</span>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering job seekers with AI-powered interview preparation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
              <li><Link to="/search" className="hover:text-blue-400">Find Interviews</Link></li>
              <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
              <li><Link to="/register" className="hover:text-blue-400">Register</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400"><Facebook size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Twitter size={24} /></a>
              <a href="#" className="hover:text-blue-400"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PrepIntra. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer