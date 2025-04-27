import prisma from "~/src/utils/prisma"
import { User } from "~/prisma"
import { UserDtoResponse } from "~/src/dto/response/user"
import { UserDtoRequest } from "~/src/dto/request/user"
import { EmailAlreadyExists } from "../errors/business"
import { PrismaClientKnownRequestError } from "~/prisma/runtime/library"

const userRepository = {
  create: async (user: UserDtoRequest) => {
    const existingUser = await userRepository.doesExists(user.email)

    if (existingUser) {
      throw new EmailAlreadyExists(user.email)
    }

    const query: User = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        role: user.role
      }
    })

    return new UserDtoResponse(query)
  },
  getAll: async () => {
    const query: User[] = await prisma.user.findMany()

    const users = query.map((user) => {
      return new UserDtoResponse(user)
    })

    return users
  },
  doesExists: async (email: string) => {
    try {
      const query = await prisma.user.findFirstOrThrow({
        where: {
          email
        }
      })
  
      return query
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        return false
      }
    }
  }
}

export default userRepository