import connection from '../../db/connection'
import { Character, CharacterData } from '../../../models/interfaces'

const db = connection

export async function createCharacter(
  novelId: number,
  newCharacter: CharacterData
): Promise<Character> {
  const createdAt = new Date().toLocaleString()
  const characterWithCreatedAt = {
    ...newCharacter,
    novel_id: novelId,
    created_at: createdAt,
  }
  const [insertedCharacter] = await db('characters')
    .insert(characterWithCreatedAt)
    .returning('*')
  return insertedCharacter
}

export async function getAllCharacters(novelId: number): Promise<Character[]> {
  const characters = await db('characters').where({ novel_id: novelId })
  return characters
}

export async function updateCharacter(
  novelId: number,
  characterId: number,
  updatedCharacterData: CharacterData
): Promise<void> {
  await db('characters')
    .where({ novel_id: novelId, id: characterId })
    .update(updatedCharacterData)
}

export async function getCharacter(
  novelId: number,
  characterId: number
): Promise<Character | undefined> {
  const character = await db('characters')
    .where({ novel_id: novelId, id: characterId })
    .first()
  return character
}

export async function deleteCharacter(
  novelId: number,
  characterId: number
): Promise<void> {
  await db('characters').where({ novel_id: novelId, id: characterId }).del()
}
