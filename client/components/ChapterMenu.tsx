import { useCallback, useEffect, useState } from 'react'
import { Chapter } from '../../models/interfaces'
import { getAllChapters } from '../apis/chapters'
import { useParams } from 'react-router-dom'

export default function ChapterMenu() {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const { novelId } = useParams()

  const fetchChapters = useCallback(async () => {
    if (novelId) {
      const response = await getAllChapters(parseInt(novelId, 10))
      setChapters(response)
    }
  }, [novelId])

  useEffect(() => {
    fetchChapters()
  }, [fetchChapters]) // Add fetchChapters to the dependency array

  return (
    <div>
      <ul>
        {chapters.map((chapter) => (
          <li key={chapter.id}>{chapter.title}</li>
        ))}
      </ul>
    </div>
  )
}
