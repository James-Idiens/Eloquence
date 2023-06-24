import express from 'express'
import {
  createNovel,
  deleteNovel,
  getNovelById,
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

router.put('/:id', async (req, res) => {
  try {
    const novelId = parseInt(req.params.id)
    const updatedNovelData = req.body

    await updateNovel(novelId, updatedNovelData)

    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to update novel')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const novelId = parseInt(req.params.id)
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

router.delete('/:id', async (req, res) => {
  try {
    const novelId = parseInt(req.params.id)
    await deleteNovel(novelId)

    res.sendStatus(204)
  } catch (error) {
    console.error(error)
    res.status(500).send('Failed to delete novel')
  }
})

export default router
