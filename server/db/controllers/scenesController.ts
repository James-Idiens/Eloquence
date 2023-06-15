import connection from '../../db/connection'
import { Scene, SceneData } from '../../../models/interfaces'

const db = connection

export async function createScene(newScene: SceneData): Promise<Scene> {
  const createdAt = new Date().toLocaleString()
  const sceneWithCreatedAt = { ...newScene, created_at: createdAt }
  const [insertedScene] = await db('scenes')
    .insert(sceneWithCreatedAt)
    .returning('*')
  return insertedScene
}

export async function updateScene(
  sceneId: number,
  updatedSceneData: SceneData
): Promise<void> {
  await db('scenes').where({ id: sceneId }).update(updatedSceneData)
}

export async function getSceneByID(
  sceneId: number
): Promise<Scene | undefined> {
  const scene = await db('scenes').select().where({ id: sceneId }).first()
  return scene
}

export async function deleteScene(sceneId: number): Promise<void> {
  await db('scenes').where({ id: sceneId }).del()
}
