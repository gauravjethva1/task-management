import { CreateTaskForm } from '../../components'
import TaskList from '../../components/taskList/taskList'

const TaskManagementPage = () => {
  return (
    <main className=" max-w-5xl mx-auto w-full">
      <CreateTaskForm />
      <TaskList />
    </main>
  )
}

export default TaskManagementPage
