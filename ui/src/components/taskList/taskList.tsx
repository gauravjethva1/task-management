import { TaskCard } from '..'
import { LOADING_TYPE } from '../../context/taskContextProvider'
import useTasks from '../../hooks/useTasks'

const TaskList = () => {
  const { loading, tasks } = useTasks()

  if (loading === LOADING_TYPE.GET_TASK) {
    return <p className="text-sm py-3 text-gray-500">loading ...</p>
  }

  return (
    <section>
      {tasks && tasks?.length > 0 ? (
        <div className="w-full grid gap-3 md:grid-cols-2 rounded-md bg-white p-4">
          {tasks.map((task) => (
            <TaskCard {...task} key={task._id} />
          ))}
        </div>
      ) : (
        <p className="text-sm py-3 text-gray-500">
          No Tasks to do, create your first task now!
        </p>
      )}
    </section>
  )
}

export default TaskList
