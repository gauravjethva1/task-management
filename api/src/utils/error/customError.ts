type ErrorReturnType = {
  code: string
  message?: string
  fields?: Record<string, unknown>[]
}

export abstract class CustomError extends Error {
  abstract statusCode: number
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CustomError.prototype)
  }
  abstract serializeErrors(): ErrorReturnType
}
