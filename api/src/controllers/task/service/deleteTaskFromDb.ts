import { TaskModel } from 'model/task.model'

export const deleteTaskFromDb = async (id: string) => {
  return await TaskModel.deleteOne({ _id: id })
}
