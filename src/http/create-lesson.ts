// File not been used

import { app } from '../app'
import { PrismaLessonsRepository } from '../repositories/prisma/PrismaLessonsRepository'
import { CreateLesson } from '../services/CreateLesson'

async function CreateLessonFn() {
  app.post('/lessons', async (req, res) => {
    // fazer validação de query e params com zod
    const { title, description } = req.body

    const prismaLessonsRepository = new PrismaLessonsRepository()
    const createLesson = new CreateLesson(prismaLessonsRepository)

    try {
      await createLesson.execute({ title, description })

      return res.status(201).send()
    } catch (error: any) {
      return res.status(400).json({
        error: error.message
      })
    }
  })
}
