import Fastify, { FastifyInstance } from "fastify"
import prisma from "~/src/utils/prisma"
import "dotenv/config"

const server: FastifyInstance = Fastify({
  logger: true
})

server.get("/", async (request, reply) => {
  return { greetings: "Hello, World!" }
})

const start = async () => {
  try {
    const port = Number(process.env.PORT) || 3002
    const host = process.env.HOST || "localhost"

    await server.listen({
      port,
      host
    })
    server.log.info(`Server listening at ${server.server.address}`)
    prisma.$connect()
    server.log.info("Testing DB Connection. OK")
  } catch (error) {
    server.log.error(error)
    server.log.info("Can't connect to DB")
    process.exit(1)
  } finally {
    prisma.$disconnect()
  }
}

start()