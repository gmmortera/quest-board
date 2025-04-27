import { CursorRequest, CursorResponse, QuestDtoRequest } from "../dto/request/quest"
import { questRepository } from "../repositories"
import { UUID } from "../utils/uuid"

const questService = {
  create: async (quest: QuestDtoRequest) => {
    const result = await questRepository.create(quest)

    return result
  },
  get: async (request: CursorRequest) => {
    const result = await questRepository.get(request)

    return new CursorResponse(result, request)
  },
  destroy: async (questId: UUID) => {
    const result = await questRepository.destroy(questId)

    return Boolean(result)
  }
}

export default questService