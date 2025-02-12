import { TASK } from 'model/task.model'
import { isValidObjectId } from 'mongoose'
import * as yup from 'yup'

export const updateTaskSchema = yup.object({
  params: yup.object({
    taskId: yup
      .string()
      .required('Task ID is required')
      .test('is-valid-object-id', 'Invalid Task ID', (value) =>
        isValidObjectId(value)
      )
  }),
  body: yup.object({
    title: yup.string().required('Task Title is required'),
    description: yup.string().required('Task Description is required'),
    status: yup
      .string()
      .optional()
      .oneOf([TASK.TODO, TASK.IN_PROGRESS, TASK.COMPLETED])
  })
})
