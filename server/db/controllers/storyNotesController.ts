import connection from '../../db/connection'
import { StoryNote, StoryNoteData } from '../../../models/interfaces'

const db = connection

export async function createStoryNote(
  novelId: number,
  newStoryNote: StoryNoteData
): Promise<StoryNote> {
  const createdAt = new Date().toLocaleString()
  const storyNoteWithCreatedAt = {
    ...newStoryNote,
    novel_id: novelId,
    created_at: createdAt,
  }
  const [insertedStoryNote] = await db('story_notes')
    .insert(storyNoteWithCreatedAt)
    .returning('*')
  return insertedStoryNote
}

export async function getAllStoryNotes(novelId: number): Promise<StoryNote[]> {
  const storyNotes = await db('story_notes').where({ novel_id: novelId })
  return storyNotes
}

export async function updateStoryNote(
  novelId: number,
  storyNoteId: number,
  updatedStoryNoteData: StoryNoteData
): Promise<void> {
  await db('story_notes')
    .where({ novel_id: novelId, id: storyNoteId })
    .update(updatedStoryNoteData)
}

export async function getStoryNoteByID(
  novelId: number,
  storyNoteId: number
): Promise<StoryNote | undefined> {
  const storyNote = await db('story_notes')
    .select()
    .where({ novel_id: novelId, id: storyNoteId })
    .first()
  return storyNote
}

export async function deleteStoryNote(
  novelId: number,
  storyNoteId: number
): Promise<void> {
  await db('story_notes').where({ novel_id: novelId, id: storyNoteId }).del()
}
