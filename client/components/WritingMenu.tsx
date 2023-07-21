import { useState } from 'react'
import ChapterMenu from './ChapterMenu'
import QuillEditor from './QuillEditor'

export default function WritingMenu() {
  const [selectedChapterContent, setSelectedChapterContent] = useState('')

  return (
    <div>
      {/* Render the ChapterMenu and pass the selected chapter content */}
      <ChapterMenu setSelectedChapterContent={setSelectedChapterContent} />

      {/* Render the QuillEditor for all content types */}
      <QuillEditor contentType="chapter" content={selectedChapterContent} />
    </div>
  )
}
