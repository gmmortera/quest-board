import fastify, { FastifyInstance, FastifySchemaCompiler } from "fastify"
import fp from "fastify-plugin"
import { ZodError, ZodSchema } from "zod"

export default fp(async (fastify: FastifyInstance) => {
  fastify.setValidatorCompiler(({ schema }) => {
    return (data) => {
      const parsedRequest = (schema as ZodSchema).safeParse(data)
  
      if (parsedRequest.success) {
        return { value: parsedRequest.data }
      }
  
      const error = parsedRequest.error
  
      return { error }
    }
  })
}, {
  name: "validator-compiler"
})