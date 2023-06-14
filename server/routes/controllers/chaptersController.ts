import connection from '../../db/connection'
import { Chapter, ChapterData } from '../../../models/interfaces'

const db = connection

export async function createChapter(newChapter: ChapterData): Promise<Chapter> {
  const [insertedChapter] = await db('chapters')
    .insert(newChapter)
    .returning('*')
  return insertedChapter
}

export async function updateChapter(
  chapterId: number,
  updatedChapterData: ChapterData
): Promise<void> {
  await db('chapters').where({ id: chapterId }).update(updatedChapterData)
}

export async function getChapter(
  chapterId: number
): Promise<Chapter | undefined> {
  const chapter = await db('chapters').where({ id: chapterId }).first()
  return chapter
}

export async function deleteChapter(chapterId: number): Promise<void> {
  await db('chapters').where({ id: chapterId }).del()
}
