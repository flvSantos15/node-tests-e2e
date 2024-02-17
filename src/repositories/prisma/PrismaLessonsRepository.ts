import { prisma } from '../../lib/prisma'
import { CreateLessonData, LessonRepository } from '../LessonsRepository'

export class PrismaLessonsRepository implements LessonRepository {
  async create(data: CreateLessonData): Promise<void> {
    await prisma.lesson.create({ data })
  }
}
