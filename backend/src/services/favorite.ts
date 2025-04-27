import { favoriteRepository } from "../repositories"
import { FavoriteRequest } from "../dto/request/favorite"

const favoriteService = {
  create: async (favoriteIds: FavoriteRequest) => {
    const result = favoriteRepository.create(favoriteIds)

    return result
  },
  getAll: async () => {
    const result = favoriteRepository.getAll()

    return result
  },
  destroy: async (favoriteIds: FavoriteRequest) => {
    const result = favoriteRepository.destroy(favoriteIds)

    return result
  }
}

export default favoriteService