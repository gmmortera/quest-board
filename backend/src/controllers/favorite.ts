import { FastifyReply, FastifyRequest } from "fastify"
import { FavoriteRequest } from "../dto/request/favorite"
import { favoriteService } from "../services"
import { UUIDParam } from "../utils/uuid"

export const createFavoriteHandler = async (
  request: FastifyRequest<{
    Body: FavoriteRequest
  }>,
  response: FastifyReply
) => {
  const favorite = await favoriteService.create(request.body)

  response.code(201).send(favorite)
}

export const getFavoritesHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const favorites = await favoriteService.getAll()

  response.code(200).send(favorites)
}

export const destroyFavoriteHandler = async (
  request: FastifyRequest<{
    Params: FavoriteRequest
  }>,
  response: FastifyReply
) => {
  await favoriteService.destroy(request.params)

  response.code(204).send()
}