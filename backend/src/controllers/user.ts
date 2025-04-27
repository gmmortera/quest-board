import { FastifyReply, FastifyRequest } from "fastify"
import { UserDtoRequest } from "../dto/request/user"
import { userService } from "../services"

export const createUserHandler = async (
  request: FastifyRequest<{
    Body: UserDtoRequest
  }>,
  response: FastifyReply
) => {
  const user = await userService.create(request.body)

  response.code(201).send(user)
}

export const getUsersHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const users = await userService.getAll()

  response.code(200).send(users)
}