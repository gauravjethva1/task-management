import { Task } from '../../types/common'
import { Api } from './axiosInstance'

export const getTasks = async (): Promise<Task[]> => {
  const { data } = await Api.get('/task')
  return data
}

export const createTaskApi = async (
  task: Omit<Task, 'status'>,
): Promise<Task> => {
  const { data } = await Api.post('/task', task)
  return data
}

export const updateTaskApi = async (
  taskId: string,
  task: Partial<Task>,
): Promise<unknown> => {
  const { data } = await Api.patch(`/task/${taskId}`, task)
  return data
}

export const deleteTaskApi = async (taskId: string): Promise<Task> => {
  const { data } = await Api.delete(`/task/${taskId}`)
  return data
}
