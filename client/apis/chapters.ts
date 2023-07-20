import request from 'superagent'
import { Chapter, ChapterData } from '../../models/interfaces'

export async function createChapter(novelId: number, chapterData: ChapterData) {
  const response = await request
    .post(`/api/v1/novels/${novelId}/chapters`)
    .send(chapterData)
  return response.body
}

export async function getChapterById(novelId: number, chapterId: number) {
  const response = await request.get(
    `/api/v1/novels/${novelId}/chapters/${chapterId}`
  )
  return response.body
}

export async function updateChapter(
  novelId: number,
  chapterId: number,
  updatedChapterData: ChapterData
) {
  await request
    .put(`/api/v1/novels/${novelId}/chapters/${chapterId}`)
    .send(updatedChapterData)
}

export async function deleteChapter(novelId: number, chapterId: number) {
  await request.delete(`/api/v1/novels/${novelId}/chapters/${chapterId}`)
}
