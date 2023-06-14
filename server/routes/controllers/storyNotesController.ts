import connection from '../../db/connection'
import { StoryNote, StoryNoteData } from '../../../models/interfaces'

const db = connection

export async function createStoryNote(
  newStoryNote: StoryNoteData
): Promise<StoryNote> {
  const [insertedStoryNote] = await db('story_notes')
    .insert(newStoryNote)
    .returning('*')
  return insertedStoryNote
}

export async function updateStoryNote(
  storyNoteId: number,
  updatedStoryNoteData: StoryNoteData
): Promise<void> {
  await db('story_notes')
    .where({ id: storyNoteId })
    .update(updatedStoryNoteData)
}

export async function getStoryNoteByID(
  storyNoteId: number
): Promise<StoryNote | undefined> {
  const storyNote = await db('story_notes')
    .select()
    .where({ id: storyNoteId })
    .first()
  return storyNote
}

export async function deleteStoryNote(storyNoteId: number): Promise<void> {
  await db('story_notes').where({ id: storyNoteId }).del()
}
