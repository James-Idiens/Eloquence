import connection from '../../db/connection'
import { Character, CharacterData } from '../../../models/interfaces'

const db = connection

export async function createCharacter(
  newCharacter: CharacterData
): Promise<Character> {
  const [insertedCharacter] = await db('characters')
    .insert(newCharacter)
    .returning('*')
  return insertedCharacter
}

export async function updateCharacter(
  characterId: number,
  updatedCharacterData: CharacterData
): Promise<void> {
  await db('characters').where({ id: characterId }).update(updatedCharacterData)
}

export async function getCharacter(
  characterId: number
): Promise<Character | undefined> {
  const character = await db('characters').where({ id: characterId }).first()
  return character
}

export async function deleteCharacter(characterId: number): Promise<void> {
  await db('characters').where({ id: characterId }).del()
}
