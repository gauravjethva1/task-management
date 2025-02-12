import { Schema, model } from 'mongoose'

export const TASK = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
} as const

export interface Task {
  title: string
  description: string
  status: keyof typeof TASK
}

const taskSchema = new Schema<Task>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: [TASK.TODO, TASK.COMPLETED, TASK.IN_PROGRESS],
      default: TASK.TODO
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)

taskSchema.index({ title: 1 })
taskSchema.index({ status: 1 })

export const TaskModel = model<Task>('Task', taskSchema)
