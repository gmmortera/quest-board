import { FastifyReply, FastifyRequest } from "fastify"
import { favoriteService } from "../services"
import { FavoriteRequest } from "../dto/request/favorite"

export const getFavoritesHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const favorites = await favoriteService.getAll()

  response.code(200).send(favorites)
}

export const createFavoriteHandler = async (
  request: FastifyRequest<{
    Body: FavoriteRequest
  }>,
  response: FastifyReply
) => {
  const favorite = await favoriteService.create(request.body)

  response.code(201).send(favorite)
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