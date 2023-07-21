import { useCallback, useEffect, useState } from 'react'
import { Chapter } from '../../models/interfaces'
import { getAllChapters, updateChapter } from '../apis/chapters'
import { useParams, useNavigate } from 'react-router-dom'

interface ChapterMenuProps {
  setSelectedChapterContent: (content: string) => void
}

export default function ChapterMenu({
  setSelectedChapterContent,
}: ChapterMenuProps) {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const { novelId } = useParams()
  const { chapterId } = useParams()
  const navigate = useNavigate()

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
            onClick={() => {
              handleChapterClick(chapter.content)
              navigate(`/novels/${novelId}/chapters/${chapter.id}`)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleChapterClick(chapter.content)
                navigate(`/novels/${novelId}/chapters/${chapter.id}`)
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
