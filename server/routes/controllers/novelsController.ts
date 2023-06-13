import { Request, Response } from 'express'
import connection from '../../db/connection'

const db = connection

// centralised error response function
const handleError = (
  res: Response,
  statusCode: number,
  errorMessage: string
) => {
  console.error(errorMessage)
  res.status(statusCode).json({ error: errorMessage })
}

export async function createNovel(req: Request, res: Response) {
  try {
    const { title, author, genre } = req.body
    const [newNovelId] = await db('novels').insert({ title, author, genre })
    res
      .status(201)
      .json({ id: newNovelId, message: 'Your novel has been created!' })
  } catch (error) {
    handleError(res, 500, 'An error occurred while creating your novel')
  }
}

export async function updateNovel(req: Request, res: Response) {
  try {
    const { title, author, genre } = req.body
    const { novelId } = req.params // Assuming you pass the novelId as a URL parameter
    // Update the novel in the database
    await db('novels').where({ id: novelId }).update({ title, author, genre })
    res.status(200).json({ message: 'Novel updated successfully' })
  } catch (error) {
    handleError(res, 500, 'An error occured updating your novel')
  }
}

export async function getNovel(req: Request, res: Response) {
  try {
    const { novelId } = req.params // Assuming you pass the novelId as a URL parameter

    // Retrieve the novel from the database
    const novel = await db('novels').where({ id: novelId }).first()

    if (!novel) {
      return res.status(404).json({ error: 'Novel not found' })
    }

    res.status(200).json(novel)
  } catch (error) {
    handleError(res, 500, 'Failed to retrieve novel')
  }
}

export async function deleteNovel(req: Request, res: Response) {
  try {
    const { novelId } = req.params // Assuming you pass the novelId as a URL parameter

    // Delete the novel from the database
    await db('novels').where({ id: novelId }).del()

    res.status(200).json({ message: 'Novel deleted successfully' })
  } catch (error) {
    handleError(res, 500, 'Failed to delete novel')
  }
}
