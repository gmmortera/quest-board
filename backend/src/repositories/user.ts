import { User } from "../../prisma"
import { PrismaClientKnownRequestError } from "../../prisma/runtime/library"
import { UserResponse } from "~/src/dto/response/user"
import { UserRequest } from "~/src/dto/request/user"
import { EmailAlreadyExists } from "../errors/business"
import prisma from "../utils/prisma"

const userRepository = {
  getAll: async () => {
    const query: User[] = await prisma.user.findMany()

    const users = query.map((user) => {
      return new UserResponse(user)
    })

    return users
  },
  create: async (user: UserRequest) => {
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

    return new UserResponse(query)
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