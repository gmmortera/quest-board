import { FastifyInstance } from "fastify"
import users from "./user"
import sessions from "./session"
import quests from "./quest"
import favorite from "./favorite"

export default async (fastify: FastifyInstance) => {
  await fastify.register(users, { prefix: "/api/v1/users" })
  await fastify.register(sessions, { prefix: "/api/v1/sessions" })
  await fastify.register(quests, { prefix: "/api/v1/quests" })
  await fastify.register(favorite, { prefix: "/api/v1/favorites" })
}
