import connection from '../../db/connection'
import { Novel, NovelData } from '../../../models/interfaces'

const db = connection

export async function createNovel(newNovel: NovelData): Promise<Novel> {
  const [insertedNovel] = await db('novels').insert(newNovel).returning('*')
  return insertedNovel
}

export async function updateNovel(
  novelId: number,
  updatedNovelData: NovelData
): Promise<void> {
  await db('novels').where({ id: novelId }).update(updatedNovelData)
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
