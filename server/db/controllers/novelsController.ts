import connection from '../../db/connection'
import { Novel, NovelData } from '../../../models/interfaces'

const db = connection

export async function createNovel(newNovel: NovelData): Promise<Novel> {
  const createdAt = new Date().toLocaleString()
  const novelWithCreatedAt = { ...newNovel, created_at: createdAt }
  const [insertedNovel] = await db('novels')
    .insert(novelWithCreatedAt)
    .returning('*')
  return insertedNovel
}

export async function updateNovel(
  novelId: number,
  updatedNovelData: NovelData
): Promise<void> {
  await db('novels').where({ id: novelId }).update(updatedNovelData)
}

export async function getNovels(): Promise<Novel[]> {
  const novels = await db('novels').select()
  return novels
}

export async function getNovelById(
  novelId: number
): Promise<Novel | undefined> {
  const novel = await db('novels').select().where({ id: novelId }).first()
  return novel
}

export async function deleteNovel(novelId: number): Promise<void> {
  await db('novels').where({ id: novelId }).del()
}
