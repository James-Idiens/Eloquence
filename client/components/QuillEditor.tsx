import { useRef, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../Styles/quill.css'

export default function QuillEditor() {
  const editorRef = useRef<Quill | null>(null)

  useEffect(() => {
    editorRef.current = new Quill('.editor-container', {
      theme: 'snow',
    })
  }, [])

  return <div className="editor-container" />
}
