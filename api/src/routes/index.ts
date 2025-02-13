import { Router } from 'express'
import { errorHandler } from 'middleware'
import { ERROR_CODES, STATUS_CODES } from 'utils/constant'
import { ApiError } from 'utils/error'
import TaskRoutes from 'routes/task.routes'

const router = Router()

const { NOT_FOUND } = STATUS_CODES
const { NOT_FOUND: URL_NOT_FOUND } = ERROR_CODES

router.get('/', (_req, res) => {
  res.send('Welcome to task management System')
})

// Router Mapper
router.use('/task', TaskRoutes)

// Handle 404 error
router.use('*', () => {
  throw new ApiError('URL Not Found', URL_NOT_FOUND, NOT_FOUND)
})

router.use(errorHandler)

export default router
