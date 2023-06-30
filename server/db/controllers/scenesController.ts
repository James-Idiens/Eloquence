import connection from '../../db/connection'
import { Scene, SceneData } from '../../../models/interfaces'

const db = connection

export async function createScene(
  chapterId: number,
  newScene: SceneData
): Promise<Scene> {
  const createdAt = new Date().toLocaleString()
  const sceneWithCreatedAt = {
    ...newScene,
    chapter_id: chapterId,
    created_at: createdAt,
  }
  const [insertedScene] = await db('scenes')
    .insert(sceneWithCreatedAt)
    .returning('*')
  return insertedScene
}

export async function getAllScenes(chapterId: number): Promise<Scene[]> {
  const scenes = await db('scenes').select().where({ chapter_id: chapterId })
  return scenes
}

export async function getSceneByID(
  sceneId: number,
  chapterId: number
): Promise<Scene | undefined> {
  const scene = await db('scenes')
    .select()
    .where({ id: sceneId, chapter_id: chapterId })
    .first()
  return scene
}
export async function updateScene(
  sceneId: number,
  chapterId: number,
  updatedSceneData: SceneData
): Promise<void> {
  await db('scenes')
    .where({ id: sceneId, chapter_id: chapterId })
    .update(updatedSceneData)
}

export async function deleteScene(
  sceneId: number,
  chapterId: number
): Promise<void> {
  await db('scenes').where({ id: sceneId, chapter_id: chapterId }).del()
}
