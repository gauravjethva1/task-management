import { useContext } from 'react'
import { TaskContext } from '../context/taskContext'

const useTasks = () => {
  const context = useContext(TaskContext)

  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider')
  }

  return context
}

export default useTasks
