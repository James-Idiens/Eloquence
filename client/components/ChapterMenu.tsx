import { useCallback, useEffect, useState } from 'react'
import { Chapter } from '../../models/interfaces'
import { createChapter, getAllChapters, updateChapter } from '../apis/chapters'
import { useParams, useNavigate } from 'react-router-dom'

interface ChapterMenuProps {
  setSelectedChapterContent: (content: string) => void
}

export default function ChapterMenu({
  setSelectedChapterContent,
}: ChapterMenuProps) {
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [newChapterTitle, setNewChapterTitle] = useState('')
  const { novelId } = useParams<{ novelId: number }>()
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

  const handleCreateChapter = async () => {
    const newChapterData = {
      title: newChapterTitle,
      novel_id: parseInt(novelId, 10),
      content: '',
    }
    const createdChapter = await createChapter(
      parseInt(novelId, 10),
      newChapterData
    )
    setChapters([...chapters, createdChapter])
    setNewChapterTitle('') // Clear the input field
  }

  return (
    <div>
      <div>
        <input
          className="text-black"
          type="text"
          value={newChapterTitle}
          onChange={(e) => setNewChapterTitle(e.target.value)}
        />
        <button onClick={handleCreateChapter}>Create Chapter</button>
      </div>
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
