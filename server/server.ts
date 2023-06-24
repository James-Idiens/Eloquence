import { join } from 'node:path'
import express from 'express'
import homeRoutes from './routes/home-routes'
import novelRoutes from './routes/novel-routes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/api/v1', homeRoutes)
server.use('/api/v1/novels', novelRoutes)

export default server
