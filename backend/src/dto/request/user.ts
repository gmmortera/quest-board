import { z } from "zod"
import { Role } from "~/prisma"

export const UserRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.enum([Role.COMMISSIONER, Role.CONTRACTOR])
})
 
export type UserDtoRequest = z.infer<typeof UserRequestSchema>
