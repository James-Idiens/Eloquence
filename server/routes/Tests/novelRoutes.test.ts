import request from 'supertest'
import server from '../../server'
import { describe, it, expect, vi } from 'vitest'
import * as db from '../../db/controllers/novelsController'

vi.mock('../novelsController')

describe('POST /api/v1/novels', () => {
  it('should add a novel', async () => {
    // Arrange
    vi.mocked(db.createNovel).mockImplementation(async (novel) => {
      return {
        id: 3,
        title: novel.title,
        author: novel.author,
        genre: novel.genre,
      }
    })

    // Act
    const response = await request(server).post('/api/v1/novels').send({
      title: 'test novel',
      author: 'John Doe',
      genre: 'fiction',
    })

    // Assert
    expect(response.body).toMatchInlineSnapshot(`
      {
        "author": "John Doe",
        "genre": "fiction",
        "id": 3,
        "title": "test novel",
      }
    `)
  })
})

describe('PUT /api/v1/novels/:id', () => {
  it('should update a novel', async () => {
    // Arrange
    const novelId = 1
    const updatedNovelData = {
      title: 'Updated Novel',
      author: 'Jane Doe',
      genre: 'fantasy',
    }

    // Mock the updateNovel function to return a successful update
    vi.mocked(db.updateNovel).mockImplementation(async (id, data) => {
      expect(id).toBe(novelId)
      expect(data).toEqual(updatedNovelData)
    })

    // Act
    const response = await request(server)
      .put(`/api/v1/novels/${novelId}`)
      .send(updatedNovelData)

    // Assert
    expect(response.status).toBe(200)
  })
})

describe('GET /api/v1/novels/:id', () => {
  it('should return the novel with the specified ID', async () => {
    // Arrange
    const expectedNovel = {
      id: 1,
      title: 'Test Novel',
      author: 'John Doe',
      genre: 'Fiction',
    }
    vi.mocked(db.getNovelById).mockResolvedValue(expectedNovel)

    // Act
    const response = await request(server).get('/api/v1/novels/1')

    // Assert
    expect(response.body).toEqual(expectedNovel)

    it('should return 404 status if the novel does not exist', async () => {
      // Arrange
      vi.mocked(db.getNovelById).mockResolvedValue(undefined)

      // Act
      const response = await request(server).get('/api/v1/novels/1')

      // Assert
      expect(response.status).toBe(404)
      expect(response.body.error).toBe('Novel not found')
    })
  })
})

describe('DELETE /api/v1/novels/:id', () => {
  it('should delete the novel with the specified ID', async () => {
    // Arrange
    const novelId = 1
    vi.mocked(db.deleteNovel).mockResolvedValue()

    // Act
    const response = await request(server).delete(`/api/v1/novels/${novelId}`)

    // Assert
    expect(response.status).toBe(204)
    expect(response.body).toEqual({})
  })
})
