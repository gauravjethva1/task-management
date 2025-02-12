import { Task, TaskModel } from 'model/task.model'

export const updateTaskInDb = async (taskId: string, task: Partial<Task>) => {
  return await TaskModel.updateOne({ _id: taskId }, { ...task })
}
