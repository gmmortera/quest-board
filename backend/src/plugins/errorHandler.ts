import { FastifyInstance } from "fastify"
import fp from "fastify-plugin"
import { ZodError } from "zod"
import { QBError } from "../errors/core"

export default fp(async (fastify: FastifyInstance) => {
  fastify.setErrorHandler((error, request, response) => {
    if (error instanceof ZodError) {
      response.code(400).send({
        errorCode: "VALIDATION_ERROR",
        message: "The server cannot or will not process the request due to malformed syntax.",
        path: request.routeOptions.url
      })
    }

    if (error instanceof QBError) {
      response.code(error.status).send({
        timestamp: error.timestamp,
        status: error.status,
        errorCode: error.errorCode,
        message: error.message,
        path: request.routeOptions.url
      })
    }

    if (error instanceof Error) {
      if (error.statusCode) {
        response.code(error.statusCode).send({
          errorCode: error.code,
          message: error.message,
          path: request.routeOptions.url
        })
      }
    }
  })
}, {

  name: 'global-error-handler'
})