import { getValidatedData, tryCatch } from 'utils/helpers'
import { deleteTaskFromDb } from './service'
import { ApiError } from 'utils/error'
import { ERROR_CODES, STATUS_CODES } from 'utils/constant'

export const deleteTask = tryCatch(async (req, res) => {
  const { taskId } = getValidatedData<{ taskId: string }>(req)

  const data = await deleteTaskFromDb(taskId)

  if (data.deletedCount === 0) {
    throw new ApiError(
      'Task Not Found',
      ERROR_CODES.NOT_FOUND,
      STATUS_CODES.NOT_FOUND
    )
  }

  res.status(200).json({ success: true })
})
