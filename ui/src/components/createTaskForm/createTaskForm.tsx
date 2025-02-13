import { useForm } from 'react-hook-form'
import { TextInput } from '../textInput'
import useTasks from '../../hooks/useTasks'
import { Task } from '../../types/common'
import { LOADING_TYPE } from '../../context/taskContextProvider'

const CreateTaskForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<Task, 'status'>>()

  const { createTask, loading } = useTasks()

  return (
    <section className="max-w-md w-full mx-auto">
      <h2 className="font-bold text-gray-900 text-xl mb-2">Create Task</h2>

      <form className="flex flex-col gap-2" onSubmit={handleSubmit(createTask)}>
        <TextInput
          label="Title"
          name="title"
          register={register}
          error={errors?.title}
        />

        <TextInput
          label="Description"
          name="description"
          register={register}
          error={errors?.description}
        />

        <button className="bg-gray-800 mt-1 w-max border-gray-800 text-gray-200 px-2 py-1.5 text-sm transition-all duration-200 outline-none focus:outline-none border rounded-md font-semibold capitalize">
          {loading === LOADING_TYPE.CREATE_TASK ? 'Loading...' : 'Create Task'}
        </button>
      </form>
    </section>
  )
}

export default CreateTaskForm
