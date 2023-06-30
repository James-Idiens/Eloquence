import { join } from 'node:path'
import express from 'express'
import homeRoutes from './routes/home-routes'
import novelRoutes from './routes/novel-routes'
import chapterRoutes from './routes/chapter-routes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1', homeRoutes)
server.use('/api/v1/novels', novelRoutes, chapterRoutes)
// server.use('/api/v1/novels/:id/chapters', chapterRoutes)
// server.use('/api/v1/novels/:id/chapters/:id/scenes', sceneRoutes)
// server.use('/api/v1/novels/:id/characters', characterRoutes)
// server.use('/api/v1/novels/:id/story-notes', storyNoteRoutes)

export default server
