import prisma from "../utils/prisma"
import { FavoriteRequest } from "../dto/request/favorite"

const favoriteRepository = {
  create: async (favoriteIds: FavoriteRequest) => {
    const query = await prisma.favorite.create({
      data: {
        userId: favoriteIds.userId,
        questId: favoriteIds.questId
      }
    })

    return query
  },
  getAll: async () => {
    const query = await prisma.favorite.findMany()

    return query
  },
  destroy: async (favoriteIds: FavoriteRequest) => {
    const query = await prisma.favorite.delete({
      where: {
        userId_questId: favoriteIds
      }
    })

    return query
  }
}

export default favoriteRepository