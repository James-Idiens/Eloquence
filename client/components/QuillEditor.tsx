import { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../Styles/quill.css'

interface QuillEditorProps {
  contentType: 'chapter' | 'character' | 'scene' | 'storyNote'
  content: string
}

export default function QuillEditor({
  contentType,
  content,
}: QuillEditorProps) {
  const editorRef = useRef<Quill | null>(null)

  useEffect(() => {
    editorRef.current = new Quill('.editor-container', {
      theme: 'snow',
    })
  }, [])

  useEffect(() => {
    // Set the editor content whenever the "content" prop changes
    if (editorRef.current) {
      editorRef.current.setContents(
        editorRef.current.clipboard.convert(content)
      )
    }
  }, [content])

  return (
    <div className="editor-container">
      {/* Display a header indicating the type of content */}
      <h3>{contentType}</h3>
    </div>
  )
}
