import { createTask, getTasks, updateTask } from 'controllers/task'
import { createTaskSchema, updateTaskSchema } from 'controllers/task/validators'
import { Router } from 'express'
import { validate } from 'middleware'

const router = Router()

/**
 * Get All Tasks
 */
router.get('/', getTasks)

/**
 * Create Task
 */
router.post('/', validate(createTaskSchema), createTask)

/**
 * Update Task
 */
router.patch('/:taskId', validate(updateTaskSchema), updateTask)

export default router
