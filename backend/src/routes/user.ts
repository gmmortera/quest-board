import { FastifyInstance } from "fastify"
import { createUserHandler, getUsersHandler } from "../controllers/user"
import { UserRequestSchema } from "../dto/request/user"

export default async (fastify: FastifyInstance) => {
  fastify.route({
    method: "GET",
    url: "/",
    handler: getUsersHandler
  })

  fastify.route({
    method: "POST",
    url: "/",
    schema: {
      body: UserRequestSchema
    },
    handler: createUserHandler
  })
}
