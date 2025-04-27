import { z } from "zod"
import { Quest } from "../../../prisma"

export const QuestRequestSchema = z.object({
  userId: z.string().uuid(),
  title: z.string(),
  content: z.string(),
  rating: z.number().max(5).min(1),
  updatedAt: z.date().optional()
})

export const CursorRequestSchema = z.object({
  cursor: z.coerce.date().optional(),
  limit: z.coerce.number()
})

export type QuestRequest = z.infer<typeof QuestRequestSchema>
export type CursorRequest = z.infer<typeof CursorRequestSchema>

export class CursorResponse {
  quests: Quest[]
  nextCursor?: Date
  hasMore: boolean

  constructor(
    quests: Quest[],
    cursorRequest: CursorRequest
  ) {
    const hasMore = quests.length > cursorRequest.limit
    const filter = (hasMore && quests.length !== 0)

    this.quests = quests
    this.nextCursor = filter ? quests.at(-1)?.createdAt : undefined
    this.hasMore = hasMore
  }
}