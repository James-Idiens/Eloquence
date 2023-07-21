import { useState } from 'react'
import { addNovel } from '../apis/novels'

function NovelForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const newNovel = { title, author, genre }
      const createdNovel = await addNovel(newNovel)
      console.log('Novel created:', createdNovel)
    } catch (error) {
      console.error('Error creating novel:', error)
    }
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div className="form-icon-container">
      {!showForm ? (
        <button
          className="form-icon bg-white border border-gray-300 shadow-md rounded-lg w-24 h-24 cursor-pointer flex items-center justify-center text-black"
          onClick={toggleForm}
        >
          Create Novel
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="font-semibold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="font-semibold">
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300 text-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="genre" className="font-semibold">
              Genre:
            </label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300 text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Create Novel
          </button>
        </form>
      )}
    </div>
  )
}

export default NovelForm
