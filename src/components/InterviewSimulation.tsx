import React, { useState } from 'react'
import { Phone, Mic, MicOff, Video, VideoOff } from 'lucide-react'

const InterviewSimulation: React.FC = () => {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hello! I'm your AI interviewer. Let's begin the interview. Could you please introduce yourself?", isUser: false }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isUser: true }])
      setInputMessage('')
      // Simulate AI response (you'd replace this with actual AI logic)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thank you for sharing. Here's my next question...", isUser: false }])
      }, 1000)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3">
        <div className="bg-gray-800 rounded-3xl p-6 shadow-lg max-w-sm mx-auto">
          <div className="bg-black rounded-2xl p-4 aspect-[9/16] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm">Interview in progress</span>
              <span className="text-sm text-red-500">●</span>
            </div>
            <div className="flex-grow flex items-center justify-center">
              <Phone size={48} className="text-white" />
            </div>
            <div className="flex justify-around mt-4">
              <button onClick={() => setIsMuted(!isMuted)} className="p-2 rounded-full bg-gray-700">
                {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
              </button>
              <button onClick={() => setIsVideoOff(!isVideoOff)} className="p-2 rounded-full bg-gray-700">
                {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-2/3 bg-gray-800 rounded-lg p-6 flex flex-col h-[600px]">
        <div className="flex-grow overflow-y-auto mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-3 rounded-lg ${message.isUser ? 'bg-blue-600' : 'bg-gray-700'}`}>
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow px-4 py-2 bg-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Type your response..."
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default InterviewSimulation