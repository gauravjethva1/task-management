export interface Page {
  id: string
  path: string
  name: string
}

export type TaskStatus = 'IN_PROGRESS' | 'COMPLETED' | 'TODO'

export interface Task {
  _id: string
  title: string
  description: string
  status: TaskStatus
}
