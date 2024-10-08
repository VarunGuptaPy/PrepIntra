import React from 'react'
import { Check } from 'lucide-react'

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99',
      features: [
        '5 mock interviews per month',
        'Basic AI feedback',
        'General interview questions'
      ],
      buttonText: 'Start Basic',
      buttonClass: 'btn btn-outline'
    },
    {
      name: 'Pro',
      price: '$19.99',
      features: [
        'Unlimited mock interviews',
        'Advanced AI feedback',
        'Industry-specific questions',
        'Performance analytics'
      ],
      buttonText: 'Go Pro',
      buttonClass: 'btn btn-primary'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Pro features',
        'Custom question sets',
        'Team management',
        'Priority support'
      ],
      buttonText: 'Contact Sales',
      buttonClass: 'btn btn-success'
    }
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center mb-2">
                  <Check className="text-green-400 mr-2" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={plan.buttonClass}>
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing