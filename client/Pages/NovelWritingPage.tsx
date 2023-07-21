import { Outlet, Route } from 'react-router-dom'
import ChapterMenu from '../components/ChapterMenu'
import QuillEditor from '../components/QuillEditor'

export default function NovelWritingPage() {
  return (
    <div>
      <ChapterMenu />
      <QuillEditor />
      {/* Render the component for chapter details */}
      {/* <Route path="/novels/:novelId/chapters/:chapterId" element={<ChapterDetails />} /> */}
      <Outlet />
    </div>
  )
}
