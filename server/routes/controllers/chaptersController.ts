import { Request, Response } from 'express'
import connection from '../../db/connection'
import handleError from './handleError'

const db = connection
const createdAt = new Date(Date.now())

// Centralized error response function

export async function createChapter(req: Request, res: Response) {
  try {
    const { novelId, title, content } = req.body

    const [newChapter] = await db('chapters')
      .insert({
        novel_id: novelId,
        title,
        content,
        created_at: createdAt,
      })
      .returning('*')
    res.status(201).json({ chapter: newChapter })
  } catch (error) {
    handleError(
      res,
      500,
      'An error occured while trying to create your chapter'
    )
  }
}

export async function updateChapter(req: Request, res: Response) {
  try {
    const { chapterId } = req.params // assuming the chapterId is passed as URL parameter
    const { title, content } = req.body

    await db('chapters').where({ id: chapterId }).update({ title, content })

    res.status(200).json({})
  } catch (error) {
    handleError(res, 500, 'An error occurred while updating the chapter')
  }
}

export async function getChapter(req: Request, res: Response) {
  try {
    const { chapterId } = req.params // assuming the chapterId is passed as URL parameter

    const chapter = await db('chapters').where({ id: chapterId }).first()

    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' })
    }

    res.status(200).json(chapter)
  } catch (error) {
    handleError(res, 500, 'Failed to retrieve chapter')
  }
}

export async function deleteChapter(req: Request, res: Response) {
  try {
    const { chapterId } = req.params

    await db('chapters').where({ id: chapterId }).del()
    res.status(200).json({ message: 'Chapter deleted successfully' })
  } catch (error) {
    handleError(res, 500, 'Failed to delete chapter')
  }
}
