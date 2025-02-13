import { useState } from 'react'
import { Task } from '../../types/common'
import useTasks from '../../hooks/useTasks'
import toast from 'react-hot-toast'
import { deleteTaskApi, updateTaskApi } from '../../utils/api/task.api'

const STATUS = {
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  TODO: 'TODO',
}

const STATUS_CLASS = {
  [STATUS.TODO]: 'bg-gray-300 border-gray-300',
  [STATUS.IN_PROGRESS]: 'bg-amber-300 border-amber-300',
  [STATUS.COMPLETED]: 'bg-emerald-600 border-emerald-600',
}

const StatusDropDown = ({
  status,
  taskId,
}: {
  taskId: string
  status: Task['status']
}) => {
  const [activeStatus, setActiveStatus] = useState(status)

  const onStatusChange = async (event) => {
    const status = event.target.value

    const toastId = toast.loading('Updating Task Status...')

    try {
      await updateTaskApi(taskId, { status })
      setActiveStatus(status)
      toast.success('Status updated Successfully', { id: toastId })
    } catch {
      toast.error('Failed to update status', { id: toastId })
    }
  }

  return (
    <select
      onChange={onStatusChange}
      className={`mt-1 w-max px-2 py-1.5 text-sm text-gray-800 transition-all duration-200 outline-none focus:outline-none border rounded-md font-semibold capitalize ${STATUS_CLASS[activeStatus]}}`}
      defaultValue={activeStatus}
    >
      {Object.keys(STATUS).map((st) => (
        <option className="bg-white text-black" key={st} value={st}>
          {st}
        </option>
      ))}
    </select>
  )
}

const TaskCard: React.FC<Task> = ({ description, status, title, _id }) => {
  const { removeTask } = useTasks()

  const [loading, setLoading] = useState(false)
  const deleteTask = async (taskId: string) => {
    setLoading(true)
    const toastId = toast.loading('Deleting Task...')

    try {
      await deleteTaskApi(taskId)
      removeTask(taskId)
      toast.success('Task Deleted Successfully', { id: toastId })
    } catch {
      toast.error('Task Deletion Failed', { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-5  border-gray-100 border rounded-md shadow-md">
      <h2 className="text-sm font-bold mb-2">{title}</h2>

      <p className="text-sm text-gray-900 mb-3">{description}</p>

      <div className="flex items-center justify-end gap-2">
        <StatusDropDown status={status} taskId={_id} />

        <button
          disabled={loading}
          type="button"
          onClick={() => deleteTask(_id)}
          className="bg-red-800 mt-1 w-max border-red-800 text-red-100 px-2 py-1.5 text-sm transition-all duration-200 outline-none focus:outline-none border rounded-md font-semibold capitalize"
        >
          {loading ? 'Loading...' : 'Remove'}
        </button>
      </div>
    </div>
  )
}

export default TaskCard
