import { equal } from "assert"
import { CursorRequest, QuestDtoRequest } from "../dto/request/quest"
import prisma from "../utils/prisma"
import { Quest } from "~/prisma"
import { UUID } from "../utils/uuid"

const questRepository = {
  create: async (quest: QuestDtoRequest) => {
    const query: Quest = await prisma.quest.create({
      data: {
        userId: quest.userId,
        title: quest.title,
        content: quest.content,
        rating: quest.rating,
        updatedAt: quest.updatedAt
      }
    })

    return query
  },
  get: async (request: CursorRequest) => {
    const where = request.cursor
      ? { createdAt: { lt: request.cursor } }
      : {}

    const query: Quest[] = await prisma.quest.findMany({
      take: request.limit + 1,
      where,
      orderBy: {
        createdAt: "desc"
      }
    })

    return query
  },
  destroy: async (questId: UUID) => {
    const query: Quest = await prisma.quest.delete({
      where: {
        id: questId
      }
    })

    return query
  }
}

export default questRepository