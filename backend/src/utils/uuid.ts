import { z } from "zod"

export const UUIDSchema = z.string().uuid()
export const UUIDParamsSchema = z.object({
  id: UUIDSchema
})

export type UUID = z.infer<typeof UUIDSchema>
export type UUIDParam = z.infer<typeof UUIDParamsSchema>