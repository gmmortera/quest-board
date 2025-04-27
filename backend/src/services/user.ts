import { UserDtoRequest } from "../dto/request/user"
import { InvalidCredentials } from "../errors/business"
import { userRepository } from "../repositories"

const userService = {
  create: async (user: UserDtoRequest) => {
    const result = await userRepository.create(user)

    return result
  },
  getAll: async () => {
    const result = await userRepository.getAll()

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