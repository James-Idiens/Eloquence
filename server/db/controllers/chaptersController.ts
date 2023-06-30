import connection from '../../db/connection'
import { Chapter, ChapterData } from '../../../models/interfaces'

const db = connection

export async function createChapter(
  novelId: number,
  newChapter: ChapterData
): Promise<Chapter> {
  const createdAt = new Date().toLocaleString()
  const chapterWithCreatedAt = {
    ...newChapter,
    novel_id: novelId,
    created_at: createdAt,
  }
  const [insertedChapter] = await db('chapters')
    .insert(chapterWithCreatedAt)
    .returning('*')
  return insertedChapter
}

export async function getAllChapters(
  novelId: number
): Promise<Chapter[] | undefined> {
  const chapter = await db('chapters').select().where({ novel_id: novelId })
  return chapter
}

export async function getChapterById(
  novelId: number,
  chapterId: number
): Promise<Chapter | undefined> {
  const chapter = await db('chapters')
    .select()
    .where({ id: chapterId, novel_id: novelId })
    .first()
  return chapter
}

export async function updateChapter(
  novelId: number,
  chapterId: number,
  updatedChapterData: ChapterData
): Promise<void> {
  await db('chapters')
    .where({ id: chapterId, novel_id: novelId })
    .update(updatedChapterData)
}

export async function deleteChapter(
  novelId: number,
  chapterId: number
): Promise<void> {
  await db('chapters').where({ id: chapterId, novel_id: novelId }).del()
}
