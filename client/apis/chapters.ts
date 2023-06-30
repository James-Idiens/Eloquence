import request from 'superagent'
import { Chapter, ChapterData } from '../../models/interfaces'

export async function createChapter(novelId: number, chapterData: ChapterData) {
  const response = await request
    .post(`/api/v1/novels/${novelId}/chapters`)
    .send(chapterData)
  return response.body
}
