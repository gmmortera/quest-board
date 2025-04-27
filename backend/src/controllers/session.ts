import { FastifyReply, FastifyRequest } from "fastify"
import { userService } from "../services"
import "dotenv/config"
import { SessionDtoRequest } from "../dto/request/session"

export const createSessionHandler = async (
  request: FastifyRequest<{
    Body: SessionDtoRequest
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
