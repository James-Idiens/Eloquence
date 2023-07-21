import { useCallback, useEffect, useState } from 'react'
import { Chapter } from '../../models/interfaces'
import { getAllChapters } from '../apis/chapters'
import { useParams } from 'react-router-dom'

interface ChapterMenuProps {
  setSelectedChapterContent: (content: string) => void
}

export default function ChapterMenu({
  setSelectedChapterContent,
}: ChapterMenuProps) {
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
  }, [fetchChapters])

  const handleChapterClick = (chapterContent: string) => {
    setSelectedChapterContent(chapterContent)
  }

  return (
    <div>
      <ul>
        {chapters.map((chapter) => (
          <button
            key={chapter.id}
            onClick={() => handleChapterClick(chapter.content)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleChapterClick(chapter.content)
              }
            }}
          >
            {chapter.title}
          </button>
        ))}
      </ul>
    </div>
  )
}
