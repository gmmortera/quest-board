import { questRepository } from "../repositories"
import { 
  CursorRequest,
  CursorResponse,
  QuestRequest
} from "../dto/request/quest"
import { UUID } from "../utils/uuid"

const questService = {
  getAll: async (request: CursorRequest) => {
    const result = await questRepository.getAll(request)

    return new CursorResponse(result, request)
  },
  create: async (quest: QuestRequest) => {
    const result = await questRepository.create(quest)

    return result
  },
  destroy: async (questId: UUID) => {
    const result = await questRepository.destroy(questId)

    return Boolean(result)
  }
}

export default questService