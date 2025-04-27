import { z } from "zod"

export class QBError extends Error {
  timestamp: Date = new Date()
  status: number
  errorCode: string
  message: string

  constructor(data: QBErrorResponse) {
    super(data.message)
    this.status = data.status
    this.errorCode = data.errorCode
    this.message = data.message
  }
}

export const ErrorResponseSchema = z.object({
  status: z.number(),
  errorCode: z.string(),
  message: z.string()
})

export type QBErrorResponse = z.infer<typeof ErrorResponseSchema>