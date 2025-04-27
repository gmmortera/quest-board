import { FastifyReply, FastifyRequest } from "fastify"
import { questService } from "../services"
import { CursorRequest, QuestRequest } from "../dto/request/quest"
import { UUIDParam } from "../utils/uuid"


export const getQuestsHandler = async (
  request: FastifyRequest<{
    Querystring: CursorRequest
  }>,
  response: FastifyReply
) => {
  const quests = await questService.getAll(request.query)

  response.code(200).send(quests)
}

export const createQuestHandler = async (
  request: FastifyRequest<{
    Body: QuestRequest
  }>,
  response: FastifyReply
) => {
  const quest = await questService.create(request.body)

  response.code(201).send(quest)
}

export const destroyQuestHandler = async (
  request: FastifyRequest<{
    Params: UUIDParam
  }>,
  response: FastifyReply
) => {
  const quest = await questService.destroy(request.params.id)

  if (quest) {
    response.code(204).send()
  }
}