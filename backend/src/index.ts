import Fastify, { FastifyInstance } from "fastify"

const server: FastifyInstance = Fastify({
  logger: true
})

server.get("/", async (request, reply) => {
  return { greetings: "Hello, World!" }
})

const start = async () => {
  try {
    await server.listen({ port: 3002, host: "localhost" })
    server.log.info(`Server listening at ${server.server.address}`)
  } catch (error) {
    server.log.error(error)
    process.exit(1)
  }
}

start()