import { Novel, NovelData } from '../../models/interfaces'
import request from 'superagent'

export async function addNovel(newNovel: NovelData): Promise<Novel> {
  const response = await request.post('/api/v1/novels').send(newNovel)
  return response.body
}
