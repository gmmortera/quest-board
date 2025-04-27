import { z } from "zod"
import { UUIDSchema } from "../../utils/uuid"

export const FavoriteRequestSchema = z.object({
  userId: UUIDSchema,
  questId: UUIDSchema
})

export type FavoriteRequest = z.infer<typeof FavoriteRequestSchema>