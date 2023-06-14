import { join } from 'node:path'
import express from 'express'
import routes from './routes/routes'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.use('/', routes)

export default server
