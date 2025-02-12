import { getValidatedData, tryCatch } from 'utils/helpers'
import { createTaskInDb } from './service'
import { Task } from 'model/task.model'

export const createTask = tryCatch(async (req, res) => {
  const { title, description } = getValidatedData<Omit<Task, 'status'>>(req)

  const task = await createTaskInDb(title, description)

  res.status(201).json(task)
})
