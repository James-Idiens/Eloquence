import express from 'express'
import { Request, Response } from 'express'
import {
  createChapter,
  deleteChapter,
  updateChapter,
  getChapterById,
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

router.get('/:id/chapters/:chapterId', async (req, res) => {
  try {
    const novelId = Number(req.params.id)
    const chapterId = Number(req.params.chapterId)
    const chapter = await getChapterById(novelId, chapterId)
    res.status(200).json(chapter)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to get chapter')
  }
})

router.put('/:id/chapters/:chapterId', async (req, res) => {
  try {
    const novelId = Number(req.params.id)
    const chapterId = Number(req.params.chapterId)
    const updatedChapterData = req.body
    await updateChapter(novelId, chapterId, updatedChapterData)
    res.status(200).send('Chapter updated')
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to update chapter')
  }
})

router.delete('/:id/chapters/:chapterId', async (req, res) => {
  try {
    const novelId = Number(req.params.id)
    const chapterId = Number(req.params.chapterId)
    await deleteChapter(novelId, chapterId)
    res.status(200).send('Chapter deleted')
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to delete chapter')
  }
})

export default router
