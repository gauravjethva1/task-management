import * as yup from 'yup'

export const createTaskSchema = yup.object({
  body: yup.object({
    title: yup.string().required('Task Title is required'),
    description: yup.string().required('Task Description is required')
  })
})
