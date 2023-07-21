import express from 'express'
import {
  createChapter,
  deleteChapter,
  updateChapter,
  getChapterById,
  getAllChapters,
} from '../db/controllers/chaptersController'

const router = express.Router()

router.post('/:novelId/chapters', async (req, res) => {
  try {
    const novelId = Number(req.params.novelId)
    const newChapter = req.body
    const createdChapter = await createChapter(novelId, newChapter)
    res.status(201).json(createdChapter)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to create chapter')
  }
})

router.get('/:novelId/chapters', async (req, res) => {
  try {
    const novelId = Number(req.params.novelId)
    const chapters = await getAllChapters(novelId)
    res.status(200).json(chapters)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to get chapters')
  }
})

router.get('/:novelId/chapters/:chapterId', async (req, res) => {
  try {
    const novelId = Number(req.params.novelId)
    const chapterId = Number(req.params.chapterId)
    const chapter = await getChapterById(novelId, chapterId)
    res.status(200).json(chapter)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to get chapter')
  }
})

router.put('/:novelId/chapters/:chapterId', async (req, res) => {
  try {
    const novelId = Number(req.params.novelId)
    const chapterId = Number(req.params.chapterId)
    const updatedChapterData = req.body
    await updateChapter(novelId, chapterId, updatedChapterData)
    res.status(200).send('Chapter updated')
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to update chapter')
  }
})

router.delete('/:novelId/chapters/:chapterId', async (req, res) => {
  try {
    const novelId = Number(req.params.novelId)
    const chapterId = Number(req.params.chapterId)
    await deleteChapter(novelId, chapterId)
    res.status(200).send('Chapter deleted')
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to delete chapter')
  }
})

export default router
