import { Request, Response } from 'express'
import connection from '../../db/connection'
import handleError from './handleError'

const db = connection
const createdAt = new Date(Date.now())

export async function createStoryNote(req: Request, res: Response) {
  try {
    const { novelId, note } = req.body

    const [newStoryNote] = await db('story_notes')
      .insert({
        novel_id: novelId,
        note,
        created_at: createdAt,
      })
      .returning('*')

    res.status(201).json({ storyNote: newStoryNote })
  } catch (error) {
    handleError(res, 500, 'An error occurred while trying to create the note')
  }
}

export async function updateStoryNote(req: Request, res: Response) {
  try {
    const { note } = req.body
    const { storyNoteId } = req.params

    await db('story_notes').where({ id: storyNoteId }).update({ note })

    res.status(200).json({})
  } catch (error) {
    handleError(res, 500, 'An error occurred while trying to update your note')
  }
}

export async function getStoryNote(req: Request, res: Response) {
  try {
    const { storyNoteId } = req.params

    const storyNote = await db('story_notes').where({ id: storyNoteId }).first()

    if (!storyNote) {
      return res.status(404).json({ error: 'Story note not found' })
    }

    res.status(200).json(storyNote)
  } catch (error) {
    handleError(res, 500, 'Failed to retrieve the story note')
  }
}

export async function deleteStoryNote(req: Request, res: Response) {
  try {
    const { storyNoteId } = req.params

    await db('story_notes').where({ id: storyNoteId }).del()

    res.status(200).json({ message: 'Story note deleted successfully' })
  } catch (error) {
    handleError(res, 500, 'Failed to delete the story note')
  }
}
