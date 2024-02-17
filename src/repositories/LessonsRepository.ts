export interface CreateLessonData {
  title: string
  description?: string
}

export interface LessonRepository {
  create(data: CreateLessonData): Promise<void>
}
