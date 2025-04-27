import { FastifyInstance } from "fastify"
import { createQuestHandler, destroyQuestHandler, getQuestsHandler } from "../controllers/quest"
import { CursorRequestSchema, QuestRequestSchema } from "../dto/request/quest"
import { UUIDParamsSchema } from "../utils/uuid"

export default async (fastify: FastifyInstance) => {
  fastify.route({
    method: "POST",
    url: "/",
    schema: {
      body: QuestRequestSchema
    },
    handler: createQuestHandler
  })

  fastify.route({
    method: "DELETE",
    url: "/:id",
    schema: {
      params: UUIDParamsSchema
    },
    handler: destroyQuestHandler
  })
  
  fastify.route({
    method: "GET",
    url: "/",
    schema: {
      querystring: CursorRequestSchema
    },
    handler: getQuestsHandler
  })
}