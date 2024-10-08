import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
      <button
        className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-6 pt-0 text-gray-300">{answer}</p>
      </div>
    </div>
  )
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How does PrepIntra's AI mock interview work?",
      answer: "PrepIntra uses advanced AI to simulate realistic interview scenarios. You'll receive questions, provide answers, and get instant feedback on your performance, including areas for improvement."
    },
    {
      question: "Can I practice for specific job roles or industries?",
      answer: "Yes! PrepIntra offers customized interview experiences for various job roles and industries, ensuring you're well-prepared for your specific career goals."
    },
    {
      question: "How often can I use the mock interview service?",
      answer: "You can use PrepIntra as often as you like, depending on your subscription plan. We encourage regular practice to maximize your interview skills improvement."
    },
    {
      question: "Is my data secure and confidential?",
      answer: "Absolutely. We take data privacy seriously and use industry-standard encryption to protect your personal information and interview responses."
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  )
}

export default FAQ