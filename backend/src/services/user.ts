import { userRepository } from "../repositories"
import { UserRequest } from "../dto/request/user"
import { InvalidCredentials } from "../errors/business"

const userService = {
  getAll: async () => {
    const result = await userRepository.getAll()

    return result
  },
  create: async (user: UserRequest) => {
    const result = await userRepository.create(user)

    return result
  },
  doesExists: async (email: string) => {
    const result = await userRepository.doesExists(email)

    if (!result) {
      throw new InvalidCredentials()
    } 

    return result
  }
}

export default userService