import zodValidatorCompiler from "./validator"
import globalErrorHandler from "./errorHandler"
import authPlugin from "./auth"
import fp from "fastify-plugin"
import { FastifyInstance } from "fastify"

export default fp(async (fastify: FastifyInstance) => {
  await fastify.register(authPlugin)
  await fastify.register(zodValidatorCompiler)
  await fastify.register(globalErrorHandler)
})