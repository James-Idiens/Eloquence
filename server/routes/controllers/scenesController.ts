import { Request, Response } from 'express'
import connection from '../../db/connection'
import handleError from './handleError'

const db = connection
const createdAt = new Date(Date.now())

export async function createScene(req: Request, res: Response) {
  try {
    const { chapterId, title, content } = req.body

    const [newScene] = await db('scenes')
      .insert({
        chapter_id: chapterId,
        title,
        content,
        created_at: createdAt,
      })
      .returning('*')

    res.status(201).json({ scene: newScene })
  } catch (error) {
    handleError(res, 500, 'An error occurred while trying to create the scene')
  }
}

export async function updateScene(req: Request, res: Response) {
  try {
    const { title, content } = req.body
    const { sceneId } = req.params

    await db('scenes').where({ id: sceneId }).update({ title, content })

    res.status(200).json({})
  } catch (error) {
    handleError(res, 500, 'An error occurred while trying to update your scene')
  }
}

export async function getScene(req: Request, res: Response) {
  try {
    const { sceneId } = req.params

    const scene = await db('scenes').where({ id: sceneId }).first()

    if (!scene) {
      return res.status(404).json({ error: 'Scene not found' })
    }

    res.status(200).json(scene)
  } catch (error) {
    handleError(res, 500, 'Failed to retrieve the scene')
  }
}

export async function deleteScene(req: Request, res: Response) {
  try {
    const { sceneId } = req.params

    await db('scenes').where({ id: sceneId }).del()

    res.status(200).json({ message: 'Scene deleted successfully' })
  } catch (error) {
    handleError(res, 500, 'Failed to delete the scene')
  }
}
