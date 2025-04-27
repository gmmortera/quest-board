import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import zodValidatorCompiler from "./validator"
import globalErrorHandler from "./errorHandler"
import authPlugin from "./auth"

export default fp(async (fastify: FastifyInstance) => {
  await fastify.register(authPlugin)
  await fastify.register(zodValidatorCompiler)
  await fastify.register(globalErrorHandler)
})