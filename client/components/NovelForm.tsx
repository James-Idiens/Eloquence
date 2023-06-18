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
        <button className="form-icon" onClick={toggleForm}>
          Create Novel
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <button type="submit">Create Novel</button>
        </form>
      )}
    </div>
  )
}

export default NovelForm
