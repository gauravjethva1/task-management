import React, { useEffect, useMemo, useState } from 'react'

import { Task } from '../types/common'
import { TaskContext, TaskContextType } from './taskContext'
import { createTaskApi, getTasks } from '../utils/api/task.api'
import toast from 'react-hot-toast'

type Props = {
  children: React.ReactNode
}

export const LOADING_TYPE = {
  GET_TASK: 'GET_TASK',
  CREATE_TASK: 'CREATE_TASK',
} as const

export type LoadingType = keyof typeof LOADING_TYPE

const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>()

  const [loading, setLoading] = useState<LoadingType>()

  const getTasksData = async () => {
    setLoading(LOADING_TYPE.GET_TASK)

    try {
      const data = await getTasks()
      setTasks(data)
    } catch {
      setTasks([])
    } finally {
      setLoading(undefined)
    }
  }

  const createTask = async (task: Omit<Task, 'status'>) => {
    const toastId = toast.loading('Creating Task...')
    setLoading(LOADING_TYPE.CREATE_TASK)

    try {
      await createTaskApi(task)
      const data = await getTasks()
      setTasks(data)
      toast.success('Task Created Successfully', { id: toastId })
    } catch {
      toast.error('Failed to create Task', { id: toastId })
    } finally {
      setLoading(undefined)
    }
  }

  const removeTask = async (taskId: string) => {
    setTasks((pre) => {
      return pre?.filter(({ _id }) => _id !== taskId)
    })
  }

  useEffect(() => {
    getTasksData()
  }, [])

  const value: TaskContextType = useMemo(
    () => ({ tasks, loading, createTask, removeTask }),
    [tasks, loading],
  )

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export default TaskProvider
