import { createContext } from 'react'

import { Task } from '../types/common'
import { LoadingType } from './taskContextProvider'

export type TaskContextType = {
  tasks?: Task[]
  loading?: LoadingType
  createTask: (task: Omit<Task, 'status'>) => Promise<void>
  removeTask: (taskId: string) => void
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined)
