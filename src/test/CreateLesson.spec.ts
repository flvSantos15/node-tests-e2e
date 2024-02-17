import { CreateLesson } from '../services/CreateLesson'
import { InMemoryLessonsRepository } from './repositories/InMemoryLessonRepository'

describe('CreateLesson Service', () => {
  it('should be able to create a new lesson', async () => {
    const inMemoryLessonRepository = new InMemoryLessonsRepository()
    const createLesson = new CreateLesson(inMemoryLessonRepository)

    await expect(
      createLesson.execute({ title: 'Nova aula' })
    ).resolves.not.toThrow()

    expect(inMemoryLessonRepository.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: 'Nova aula'
        })
      ])
    )
  })

  it('should NOT be able to create a new lesson with invalid title', async () => {
    const inMemoryLessonRepository = new InMemoryLessonsRepository()
    const createLesson = new CreateLesson(inMemoryLessonRepository)

    await expect(createLesson.execute({ title: '' })).rejects.toThrow()

    expect(inMemoryLessonRepository.items).toEqual([])
  })
})
