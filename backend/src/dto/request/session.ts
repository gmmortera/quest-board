import { z } from "zod"

export const SessionRequestSchema = z.object({
  email: z.string().email()
})
 
export type SessionDtoRequest = z.infer<typeof SessionRequestSchema>
