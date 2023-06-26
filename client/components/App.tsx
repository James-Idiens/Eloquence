import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import NovelListPage from './NovelListPage'
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
