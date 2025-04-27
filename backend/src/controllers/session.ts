import { FastifyReply, FastifyRequest } from "fastify"
import { userService } from "../services"
import { SessionRequest } from "../dto/request/session"
import "dotenv/config"

export const createSessionHandler = async (
  request: FastifyRequest<{
    Body: SessionRequest
  }>,
  response: FastifyReply
) => {
  const user = await userService.doesExists(request.body.email)

  const payload = {
    id: user.id,
    email: user.email
  }

  const token = await response.jwtSign(payload)
  
  response.setCookie("token", token)

  response.code(200).send()
}

export const destroySessionHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  response.code(204).send()
}
