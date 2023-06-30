import express from 'express'
import { Request, Response } from 'express'
import {
  createChapter,
  deleteChapter,
  updateChapter,
  getChapterByID,
} from '../db/controllers/chaptersController'

const router = express.Router()

router.post('/:id/chapters', async (req, res) => {
  try {
    const novelId = Number(req.params.id)
    const newChapter = req.body
    const createdChapter = await createChapter(novelId, newChapter)
    res.status(201).json(createdChapter)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to create chapter')
  }
})

export default router
