import React, { useState } from 'react'
import { Search, User } from 'lucide-react'
import { Link } from 'react-router-dom'

interface InterviewWidget {
  title: string
  description: string
}

const SearchInterviews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const interviewWidgets: InterviewWidget[] = [
    { title: "Software Engineering", description: "Practice technical interviews for software development roles." },
    { title: "Data Science", description: "Prepare for data analysis and machine learning interviews." },
    { title: "Product Management", description: "Hone your product strategy and leadership skills." },
    { title: "Marketing", description: "Get ready for brand strategy and digital marketing interviews." },
    { title: "Sales", description: "Sharpen your pitch and negotiation skills for sales roles." },
    { title: "Finance", description: "Practice financial modeling and investment banking interviews." },
  ]

  const filteredWidgets = interviewWidgets.filter(widget =>
    widget.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    widget.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Find Your Interview Practice</h1>
        <Link to="/profile" className="btn btn-secondary flex items-center">
          <User size={20} className="mr-2" />
          Profile
        </Link>
      </div>
      
      <div className="max-w-2xl mx-auto mb-12 relative">
        <input
          type="text"
          placeholder="Search for interview types..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-12 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredWidgets.map((widget, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{widget.title}</h3>
            <p className="text-gray-400 mb-4">{widget.description}</p>
            <Link to="/interview-practice" className="btn btn-primary">Start Practice</Link>
          </div>
        ))}
      </div>

      {filteredWidgets.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No interviews found matching your search. Try a different term.</p>
      )}
    </div>
  )
}

export default SearchInterviews