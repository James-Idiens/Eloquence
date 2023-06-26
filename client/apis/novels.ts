import { Novel, NovelData } from '../../models/interfaces'
import request from 'superagent'

export async function addNovel(newNovel: NovelData): Promise<Novel> {
  const response = await request.post('/api/v1/novels').send(newNovel)
  return response.body
}

export async function updateNovel(
  novelId: number,
  updatedNovel: NovelData
): Promise<void> {
  await request.put(`/api/v1/novels/${novelId}`).send(updatedNovel)
}

export async function getNovels(): Promise<Novel[]> {
  const response = await request.get(`/api/v1/novels`)
  return response.body as Novel[]
}

export async function getNovelById(novelId: number): Promise<Novel> {
  const response = await request.get(`/api/v1/novels/${novelId}`)
  return response.body
}

export async function deleteNovel(novelId: number): Promise<void> {
  await request.delete(`/api/v1/novels/${novelId}`)
}
