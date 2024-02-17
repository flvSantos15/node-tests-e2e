import crypto from 'node:crypto'
import {
  CreateLessonData,
  LessonRepository
} from '../../repositories/LessonsRepository'

interface ItemsProps {
  id: string
  title: string
  description?: string
}

export class InMemoryLessonsRepository implements LessonRepository {
  public items: ItemsProps[] = []

  async create({ title, description }: CreateLessonData): Promise<void> {
    this.items.push({
      id: crypto.randomUUID(),
      title,
      description
    })
  }
}
