import { FastifyInstance } from "fastify";
import { createSessionHandler, destroySessionHandler } from "../controllers/session";
import { SessionRequestSchema } from "../dto/request/session";

export default async (fastify: FastifyInstance) => {
  fastify.route({
    method: "POST",
    url: "/",
    schema: {
      body: SessionRequestSchema
    },
    handler: createSessionHandler
  })

  fastify.route({
    method: "DELETE",
    url: "/",
    handler: destroySessionHandler
  })
}