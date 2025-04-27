import { FastifyReply, FastifyRequest } from "fastify"
import { userService } from "../services"
import { UserRequest } from "../dto/request/user"

export const getUsersHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const users = await userService.getAll()

  response.code(200).send(users)
}

export const createUserHandler = async (
  request: FastifyRequest<{
    Body: UserRequest
  }>,
  response: FastifyReply
) => {
  const user = await userService.create(request.body)

  response.code(201).send(user)
}
