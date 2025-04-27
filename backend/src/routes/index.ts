import users from "./user"
import sessions from "./session"
import { FastifyInstance } from "fastify"

export default async (fastify: FastifyInstance) => {
  await fastify.register(users, { prefix: "/api/v1/users" })
  await fastify.register(sessions, { prefix: "/api/v1/sessions" })
}
