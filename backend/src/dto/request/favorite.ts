import { z } from "zod"
import { UUIDSchema } from "~/src/utils/uuid"

export const FavoriteRequestSchema = z.object({
  userId: UUIDSchema,
  questId: UUIDSchema
})

export type FavoriteRequest = z.infer<typeof FavoriteRequestSchema>