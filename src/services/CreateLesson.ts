import { LessonRepository } from '../repositories/LessonsRepository'

interface CreateLessonRequest {
  title: string
  description?: string
}

export class CreateLesson {
  constructor(private lessonsRepository: LessonRepository) {}

  async execute({ title, description }: CreateLessonRequest) {
    // validations here
    if (!title) {
      throw new Error('Title invalid')
    }

    this.lessonsRepository.create({
      title,
      description
    })
  }
}
