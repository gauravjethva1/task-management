import { tryCatch } from 'utils/helpers'
import { getTasksFromDb } from './service'

export const getTasks = tryCatch(async (_req, res) => {
  const tasks = await getTasksFromDb()
  res.status(200).json(tasks)
})
