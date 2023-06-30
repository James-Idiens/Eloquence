import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import NovelListPage from '../Pages/NovelListPage'
import NovelWritingPage from '../Pages/NovelWritingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/novels" element={<NovelListPage />} />
        <Route path="/novels/:id" element={<NovelWritingPage />} />
      </Routes>
    </Router>
  )
}

export default App
