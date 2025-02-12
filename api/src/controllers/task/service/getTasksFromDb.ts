import { TaskModel } from 'model/task.model'

export const getTasksFromDb = async () => {
  return await TaskModel.find()
}
