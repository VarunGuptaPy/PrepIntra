import React, { useState, KeyboardEvent } from 'react'
import { User, X } from 'lucide-react'

const ProfilePage: React.FC = () => {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [weaknesses, setWeaknesses] = useState<string[]>([])
  const [powers, setPowers] = useState<string[]>([])
  const [image, setImage] = useState<File | null>(null)
  const [currentWeakness, setCurrentWeakness] = useState('')
  const [currentPower, setCurrentPower] = useState('')

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleChipKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string[]>>,
    current: string,
    setCurrent: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.key === 'Enter' && current.trim()) {
      e.preventDefault()
      setter(prev => [...prev, current.trim()])
      setCurrent('')
    }
  }

  const removeChip = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setter(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ name, about, weaknesses, powers, image })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg">
        <div className="mb-6 text-center">
          <div className="w-32 h-32 mx-auto bg-gray-700 rounded-full flex items-center justify-center mb-4">
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <User size={64} className="text-gray-400" />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="profile-image"
          />
          <label htmlFor="profile-image" className="btn btn-secondary cursor-pointer">
            Upload Image
          </label>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="about" className="block mb-2">About You</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 h-32"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="weaknesses" className="block mb-2">Your Weaknesses</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {weaknesses.map((weakness, index) => (
              <div key={index} className="bg-gray-700 text-white px-3 py-1 rounded-full flex items-center">
                {weakness}
                <button
                  type="button"
                  onClick={() => removeChip(index, setWeaknesses)}
                  className="ml-2 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            id="weaknesses"
            value={currentWeakness}
            onChange={(e) => setCurrentWeakness(e.target.value)}
            onKeyDown={(e) => handleChipKeyDown(e, setWeaknesses, currentWeakness, setCurrentWeakness)}
            placeholder="Type a weakness and press Enter"
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="powers" className="block mb-2">Your Powers</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {powers.map((power, index) => (
              <div key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full flex items-center">
                {power}
                <button
                  type="button"
                  onClick={() => removeChip(index, setPowers)}
                  className="ml-2 focus:outline-none"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
          <input
            type="text"
            id="powers"
            value={currentPower}
            onChange={(e) => setCurrentPower(e.target.value)}
            onKeyDown={(e) => handleChipKeyDown(e, setPowers, currentPower, setCurrentPower)}
            placeholder="Type a power and press Enter"
            className="w-full px-3 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Save Profile
        </button>
      </form>
    </div>
  )
}

export default ProfilePage