import express from 'express'
import { createNovel } from '../db/controllers/novelsController'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    res.send('This is the homepage')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }
})

router.post('/novels', async (req, res) => {
  try {
    const newNovel = req.body
    const createdNovel = await createNovel(newNovel)
    res.status(201).json(createdNovel)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to create novel')
  }
})

export default router
