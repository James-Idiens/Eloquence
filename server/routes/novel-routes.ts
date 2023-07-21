import express from 'express'
import {
  createNovel,
  deleteNovel,
  getNovelById,
  getNovels,
  updateNovel,
} from '../db/controllers/novelsController'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const newNovel = req.body
    const createdNovel = await createNovel(newNovel)
    res.status(201).json(createdNovel)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to create novel')
  }
})

router.get('/', async (req, res) => {
  try {
    const getAllNovels = await getNovels()
    res.status(201).json(getAllNovels)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to create novel')
  }
})

router.put('/:novelId', async (req, res) => {
  try {
    const novelId = parseInt(req.params.novelId)
    const updatedNovelData = req.body

    await updateNovel(novelId, updatedNovelData)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to update novel')
  }
})

router.get('/:novelId', async (req, res) => {
  try {
    const novelId = parseInt(req.params.novelId)
    const novel = await getNovelById(novelId)

    if (!novel) {
      res.status(404).send('Novel not found')
    } else {
      res.status(200).json(novel)
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to retrieve novel')
  }
})

router.delete('/:novelId', async (req, res) => {
  try {
    const novelId = parseInt(req.params.novelId)
    await deleteNovel(novelId)

    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to delete novel')
  }
})

export default router
