// A Novel that has been inserted into the database
export interface Novel {
  id: number
  title: string
  author: string
  genre: string
}

// A novel that hasn't been inserted into the database
export interface NovelData {
  title: string
  author: string
  genre: string
}

export interface Chapter {
  id: number
  title: string
  novel_id: number
  content: string
}

export interface ChapterData {
  title: string
  novel_id: number
  content: string
}

export interface Scene {
  id: number
  title: string
  chapter_id: number
  content: string
}

export interface SceneData {
  title: string
  chapter_id: number
  content: string
}

export interface Character {
  id: number
  name: string
  note: string
  novel_id: number
}

export interface CharacterData {
  name: string
  note: string
  novel_id: number
}

export interface StoryNote {
  id: number
  novel_id: number
  note: string
}

export interface StoryNoteData {
  novel_id: number
  note: string
}
