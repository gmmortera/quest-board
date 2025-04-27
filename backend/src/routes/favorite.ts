import { FastifyInstance } from "fastify"
import { createFavoriteHandler, destroyFavoriteHandler, getFavoritesHandler } from "../controllers/favorite"
import { FavoriteRequestSchema } from "../dto/request/favorite"

export default async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    handler: getFavoritesHandler
  })

  fastify.route({
    method: "POST",
    url: "/",
    schema: {
      body: FavoriteRequestSchema
    },
    handler: createFavoriteHandler
  })

  fastify.route({
    method: "DELETE",
    url: "/:id",
    schema: {
      params: FavoriteRequestSchema
    },
    handler: destroyFavoriteHandler
  })
}