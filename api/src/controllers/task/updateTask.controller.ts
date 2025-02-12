import { tryCatch } from 'utils/helpers'
import { updateTaskInDb } from './service'
import { getValidatedData } from 'utils/helpers'
import { Task } from 'model/task.model'

interface UpdateTaskData extends Partial<Task> {
  taskId: string
}

export const updateTask = tryCatch(async (req, res) => {
  const { taskId, ...data } = getValidatedData<UpdateTaskData>(req)

  const task = await updateTaskInDb(taskId, data)

  res.status(201).json(task)
})
