import React, { useState, KeyboardEvent } from 'react'
import { X } from 'lucide-react'

type TabType = 'link' | 'jd' | 'custom'

const InterviewPractice: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('link')
  const [jobLink, setJobLink] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [programmingLanguage, setProgrammingLanguage] = useState('')
  const [topics, setTopics] = useState<string[]>([])
  const [currentTopic, setCurrentTopic] = useState('')

  const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Swift', 'Kotlin', 'PHP', 'TypeScript']

  const handleTopicKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentTopic.trim()) {
      e.preventDefault()
      setTopics(prev => [...prev, currentTopic.trim()])
      setCurrentTopic('')
    }
  }

  const removeTopic = (index: number) => {
    setTopics(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ activeTab, jobLink, jobDescription, programmingLanguage, topics })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Interview Practice</h1>
      <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 ${activeTab === 'link' ? 'bg-blue-600' : 'bg-gray-700'} rounded-tl-lg rounded-bl-lg`}
            onClick={() => setActiveTab('link')}
          >
            Link-based
          </button>
          <button
            className={`flex-1 py-2 ${activeTab === 'jd' ? 'bg-blue-600' : 'bg-gray-700'}`}
            onClick={() => setActiveTab('jd')}
          >
            JD-based
          </button>
          <button
            className={`flex-1 py-2 ${activeTab === 'custom' ? 'bg-blue-600' : 'bg-gray-700'} rounded-tr-lg rounded-br-lg`}
            onClick={() => setActiveTab('custom')}
          >
            Custom
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'link' && (
            <div className="mb-4">
              <label htmlFor="jobLink" className="block mb-2">Job Link</label>
              <input
                type="url"
                id="jobLink"
                value={jobLink}
                onChange={(e) => setJobLink(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
          )}

          {activeTab === 'jd' && (
            <div className="mb-4">
              <label htmlFor="jobDescription" className="block mb-2">Job Description</label>
              <textarea
                id="jobDescription"
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
                required
              />
            </div>
          )}

          {activeTab === 'custom' && (
            <div className="mb-4">
              <label htmlFor="topics" className="block mb-2">Topics to be Covered</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {topics.map((topic, index) => (
                  <div key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center">
                    {topic}
                    <button
                      type="button"
                      onClick={() => removeTopic(index)}
                      className="ml-2 focus:outline-none"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <input
                type="text"
                id="topics"
                value={currentTopic}
                onChange={(e) => setCurrentTopic(e.target.value)}
                onKeyDown={handleTopicKeyDown}
                placeholder="Type a topic and press Enter"
                className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="programmingLanguage" className="block mb-2">Programming Language</label>
            <select
              id="programmingLanguage"
              value={programmingLanguage}
              onChange={(e) => setProgrammingLanguage(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Select a language</option>
              {programmingLanguages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Start Interview
          </button>
        </form>
      </div>
    </div>
  )
}

export default InterviewPractice