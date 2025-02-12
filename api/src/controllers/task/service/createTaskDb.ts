import { TaskModel } from 'model/task.model'

export const createTaskInDb = async (title: string, description: string) => {
  return await TaskModel.create({
    title,
    description
  })
}
