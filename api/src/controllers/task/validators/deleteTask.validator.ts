import { isValidObjectId } from 'mongoose'
import * as yup from 'yup'

export const deleteTaskSchema = yup.object({
  params: yup.object({
    taskId: yup
      .string()
      .required('Task ID is required')
      .test('is-valid-object-id', 'Invalid Task ID', (value) =>
        isValidObjectId(value)
      )
  })
})
