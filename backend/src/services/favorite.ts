import { favoriteRepository } from "../repositories"
import { FavoriteRequest } from "../dto/request/favorite"

const favoriteService = {
  getAll: async () => {
    const result = favoriteRepository.getAll()

    return result
  },
  create: async (favoriteIds: FavoriteRequest) => {
    const result = favoriteRepository.create(favoriteIds)

    return result
  },
  destroy: async (favoriteIds: FavoriteRequest) => {
    const result = favoriteRepository.destroy(favoriteIds)

    return result
  }
}

export default favoriteService