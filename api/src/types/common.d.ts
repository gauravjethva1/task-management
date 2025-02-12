import { Request } from 'express'

type ValidatedData = {
  query: Record<string, any>
  params: Record<string, any>
  body: Record<string, any>
}

export interface RequestWithValidate extends Request {
  validatedData?: ValidatedData
}
