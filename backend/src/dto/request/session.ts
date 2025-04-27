import { z } from "zod"

export const SessionRequestSchema = z.object({
  email: z.string().email()
})
 
export type SessionRequest = z.infer<typeof SessionRequestSchema>
